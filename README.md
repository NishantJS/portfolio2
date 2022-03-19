# Personal Portfolio Website
## A clean, beautiful and responsive portfolio website!

<p align="center">
  <kbd>
<img src="https://nishant.social/static/media/portfolio_light.bf57ac38de7d6aff3abd.png"></img>
<img src="https://nishant.social/static/media/portfolio_dark.3549e474dd5f9ab1401d.png"></img>
  </kbd>
</p>


Just change `src/portfolio.js` to get your personal portfolio. Customize portfolio theme by using your own color scheme globally in the  `src/styles/index.scss` file (change `root` for light theme and `data-theme="dark"` for dark theme). Feel free to use it as-is or personalize it as much as you want.

If you'd like to **contribute** and make this much better for other users, have a look at [Issues](https://github.com/NishantJS/portfolio2/issues).

Created something awesome for your fork of the portfolio and want to share it? Feel free to open a [pull request](https://github.com/NishantJS/portfolio2/pulls).

## Table of Contents
- [Todo](#todo)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customize](#customize)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Icons](#icons)
- [For the Future](#for-the-future)

## Todo

complete:
✔️ Summary and About me
✔️ Projects
✔️ Contact
✔️ Theme toggle
✔️ Background Particles
in work:
❌ Education

To view a live example, **[click here](https://nishant.social)**.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone https://github.com/NishantJS/portfolio2.git

# Go into the repository
cd portfolio2

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Customize

```bash
- portfolio2
    - node_modules
    - public
    - src
        - assets  <-- change png images to your project screenshots
        - styles
            - index.scss <-- change theme colors
        -comonents
            - About.tsx <-- change about information and cv link
            - ContactData.tsx <-- change your social links
            - ProjectData.tsx <-- change project data
    - .gitignore
    - package-lock.json
    - package.json
```

```javascript
> ProjectData.tsx
export const ProjectData = [
  {
    title: "Buddy FrontEnd", //<-- project title
    imgd: BuddyDark, //<-- image for dark mode
    imgl: Buddy, //<-- image for light mode
    repo: "https://github.com/NishantJS/Buddy-Frontend", //<-- github repository url
    desc: "Buddy is an E-Commerce site for pet care products.", //<-- project description
    live: "https://www.buddyshop.in" //<-- project live version url if hosted anywhere
  }
];
```

```javascript
> ContactData.tsx
export const ContactData = [
  {
    title: "E-mail", //<-- social media name
    icon: <Email />, //<-- image icon for the same
    handle: "nishantchorge79@gmail.com", //<-- handle for the same
    link: "mailto:nishantchorge79@gmail.com" //<-- html link prefix if not url i.e. mailto: if email, tel: if number
  }
];
```

```css
> main.scss
&::after {
  content: "N"; <-- change the big N displayed on body to your initial
  left: 0;
  top: 0;
  position: absolute;
  font-size: 20vw;
  opacity: 0.02;
  z-index: 0;
}
```

## Router

I have used `HashRouter` but u can use `BrowserRrouter` with basename property if u prefer or feels the generated url is not user friendly. i.e `sitename.domain/#/route` instead `sitename.domain/route`

## Deployment
When you are done with the setup, you should host your website online.
I highly recommend to read through the [Deployment](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Deploying to GitHub Pages

This section guides you to deploy your portfolio on GitHub pages.

- Navigate to `package.json` and enter your domain name instead of `https://nishant.social` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/portfolio2`, add the same to the homepage section of `package.json`.

- In short you can also add `/portfolio2` to `package.json` as both are exactly same. Upon doing so, you tell `create-react-app` to add the path assets accordingly.

- If you do add `/portfolio2/` and using BrowserRouter instead HashRouter set the basename as `/portfolio`. for HashRouter u don't have to do anything.

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

#### Deploying to Github pages

For more information, read [hosting react app](https://create-react-app.dev/docs/deployment/#github-pages).


## Technologies Used 

- [react](https://reactjs.org/)
- [sass](https://sass-lang.com/)
- [react-router-dom v5](https://v5.reactrouter.com/)
- [react-tsparticles](https://particles.js.org/)
- [typescript](https://github.com/microsoft/TypeScript)

## Icons
- [Iconscout](https://iconscout.com/)


## For the Future
If you can help me with these. Please don't hesitate to open a [pull request](https://github.com/NishantJS/portfolio2/pulls).
