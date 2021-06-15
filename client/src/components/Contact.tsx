import { ReactComponent as Email } from "../assets/email.svg"
import { ReactComponent as Github } from "../assets/github.svg"
import { ReactComponent as Linkedin } from "../assets/linkedin.svg"
import { ReactComponent as Call } from "../assets/about.svg"
import "../styles/contact.scss"

type contactType = {
  title: string,
  icon: any,
  handle: string,
  link: string
}

const Contact = (): JSX.Element => {

  return (
    <section className="contact">

      {ContactData.map(({ title, icon, handle, link }: contactType, i) => {
        return (
          <a href={link} key={title} title={title}>
            <div className={`link link-${i + 1}`}>
              <span className="icon">{icon}</span>
              <span>{handle}</span>
            </div>
          </a>
        )
      })}

    </section>
  )
}

const ContactData: contactType[] = [
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

export default Contact;