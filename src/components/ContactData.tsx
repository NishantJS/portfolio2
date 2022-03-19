import { ReactComponent as Email } from "../assets/email.svg"
import { ReactComponent as Github } from "../assets/github.svg"
import { ReactComponent as Linkedin } from "../assets/linkedin.svg"
import { ReactComponent as Call } from "../assets/about.svg"

type contactType = {
  title: string,
  icon: any,
  handle: string,
  link: string
}

/**
* @param title contact title
* @param icon icons imported from assets
* @param repo for github repository link
* @param desc for github repository link
* @param desc for project description
* @param link for project live version if available
//? __$__ is used to underline in frontend
**/

export const ContactData: contactType[] = [
  {
    title: "E-mail",
    icon: <Email />,
    handle: "nishantchorge79@gmail.com",
    link: "mailto:nishantchorge79@gmail.com"
  }, {
    title: "E-mail",
    icon: <Email />,
    handle: "nishantchorge@yahoo.com",
    link: "mailto:nishantchorge@yahoo.com"
  },
  {
    title: "Github",
    icon: <Github />,
    handle: "/NishantJS",
    link: "https://github.com/NishantJS/"
  },
  {
    title: "Linked-in",
    icon: <Linkedin />,
    handle: "/NishantChorge",
    link: "https://www.linkedin.com/in/nishant-chorge/"
  },
  {
    title: "Call",
    icon: <Call />,
    handle: "+91 6283 92 5737",
    link: "tel:+916283925737"
  }
]
