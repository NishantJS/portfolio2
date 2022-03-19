import PortfolioDark from "../assets/portfolio_dark.png";
import Portfolio from "../assets/portfolio_light.png";
import Moments0 from "../assets/moments0.png";
import Moments1 from "../assets/moments1.jpg";
import BuddyDark from "../assets/buddy_dark.png";
import Buddy from "../assets/buddy_light.png";

/**
* @param imgd for dark theme image
* @param imgl for light theme image
//* Please change the url and name above if u have changed the images in assets folder already 
* @param repo for github repository link
* @param desc for github repository link
* @param desc for project description
* @param link for project live version if available
//? __$__ is used to underline in frontend
**/

export const ProjectData = [
  {
    title: "Buddy FrontEnd",
    imgd: BuddyDark,
    imgl: Buddy,
    repo: "https://github.com/NishantJS/Buddy-Frontend",
    desc: "Buddy is an E-Commerce site for pet care products. In FrontEnd of buddy I have used __$__React + Sass__$__. For routing __$__React-Router__$__ and for state I have used __$__Hooks + Redux + Thunk__$__, For API fetching I have used __$__Axios__$__",
    live: "https://www.buddyshop.in"
  }, {
    title: "Moments",
    imgd: Moments0,
    imgl: Moments1,
    repo: "https://github.com/NishantJS/Moments",
    desc: "My Capstone Project Moments is a web app where one can save their moments on cloud and share it with their loved ones and friends. Built with __$__React + React Router + Sass + Firebase__$__"
  }, {
    title: "Portfolio",
    imgd: PortfolioDark,
    imgl: Portfolio,
    repo: "https://github.com/NishantJS/portfolio2",
    desc: "If you are reading this then you are on this project. This project is made with __$__React + React Router + Sass and Typescript__$__"
  }, {
    title: "Buddy Backend",
    imgd: BuddyDark,
    imgl: Buddy,
    repo: "https://github.com/NishantJS/Buddy-Backend",
    desc: "For backend of Buddy I have used __$__Express__$__, and for Database I have used __$__MongoDB__$__. Also I have used __$__JWT__$__ for sessions. Authentication is done with __$__Passport__$__",
    live: "https://www.buddyshop.in",
  }
]