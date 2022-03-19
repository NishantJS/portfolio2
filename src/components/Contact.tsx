import "../styles/contact.scss"
import { ContactData } from "./ContactData";

const Contact = (): JSX.Element => {
  return (
    <section className="contact">
      {ContactData.map(({ title, icon, handle, link }, i) => {
        return (
          <a href={link} key={handle} title={title} target="_blank" rel="noopener noreferrer">
            <div className="link">
              <span className="icon">{icon}</span>
              <span>{handle}</span>
            </div>
          </a>
        )
      })}

    </section>
  )
}

export default Contact;