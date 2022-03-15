import '../styles/main.scss';
import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import Particle from './Particle';
import Loading from "./Loading";
import Sidebar from "./Sidebar";
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const Project = lazy(() => import('./Project'));
const Theme = lazy(() => import('./Theme'));
const NotFound = lazy(() => import('./NotFound'));

const App = (): JSX.Element => {

  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect((): void => {
    // console.info(`Made with ❤ by Nishant Chorge in React.JS`)

    let theme = localStorage.getItem("theme");

    if (!theme || !theme.match(/^(dark|light)$/)) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark")
        setDarkTheme(p => true);
      } else {
        localStorage.setItem("theme", "light")
        document.documentElement.setAttribute("data-theme", "");
        setDarkTheme(p=> false)
      }
    } else {
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark")
        setDarkTheme(p => true);
      } else {
        document.documentElement.setAttribute("data-theme", "");
        setDarkTheme(p=> false)
      }
    }
  }, [isDarkTheme])

  const isMobile = useRef(window.innerWidth > 700 ? false : true);

  const updateTheme = (): void => {
    let root = document.documentElement;

    if (isDarkTheme) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light")
      setDarkTheme((): false => false);
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark")
      setDarkTheme((): true => true);
    }
  };

  return (
    <div className="main">
      <Sidebar />
      <div className="container">
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/" component={About} />
            <Route exact path="/project" component={()=><Project isDarkTheme={isDarkTheme}/>}/>
          <Route exact path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      <Theme isDarkTheme={isDarkTheme} updateTheme={updateTheme}/>
      </Suspense>
      </div>
      {!isMobile.current && <Particle />}
    </div>
  );
}

export default App;
