import '../styles/main.scss';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Project from './Project';
import NotFound from './NotFound';
import "../styles/container.scss";
import Theme from './Theme';
import { useEffect, useRef } from 'react';
import Particle from './Particle';

const App = (): JSX.Element => {

  useEffect((): void => {
    console.info(`Made with ❤ by Nishant Chorge in React.JS`)

    !localStorage.getItem("theme") && localStorage.setItem("theme", "dark");
    localStorage.getItem("theme") === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "");

  }, [])

  const isMobile = useRef(window.innerWidth > 400 ? false : true)

  const isDark = localStorage.getItem("theme") === "dark" ? true : false;

  return (
    <div className="main">
      <Router>
        <Sidebar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Theme isDarkTheme={isDark} />
        </div>
      </Router>
      {!isMobile.current && <Particle />}
    </div>
  );
}

export default App;
