import '../styles/main.scss';
import Sidebar from './Sidebar';
import { Switch, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Project from './Project';
import NotFound from './NotFound';
import Theme from './Theme';
import { useEffect, useRef, useState } from 'react';
import Particle from './Particle';

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
  const container = useRef<HTMLDivElement>(null);

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

  const detectGesture = (event: React.TouchEvent<HTMLDivElement>) => {
  
    // !(event.changedTouches[0].clientX < (window.innerWidth / 2))

  }

  return (
    <div className="main">
      <Sidebar />
      <div className="container" ref={container} onTouchEnd={(event)=> isMobile.current ? detectGesture(event): console.log()}>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        <Theme isDarkTheme={isDarkTheme} updateTheme={updateTheme}/>
        </div>
      {!isMobile.current && <Particle />}
    </div>
  );
}

export default App;
