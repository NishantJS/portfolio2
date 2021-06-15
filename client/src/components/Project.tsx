import { ProjectData } from "./ProjectData"
import "../styles/project.scss"
import { useEffect, useState } from "react"

const Project = () => {

  let [isDark, setDark] = useState(() => true);
  useEffect(() => {
    localStorage.getItem("theme") === "dark" ? setDark(() => true) : setDark(() => false);
  }, [])

  return (
    <section className="project">
      {ProjectData.map(({ imgd, imgl, repo, title, desc }): JSX.Element => (
        <div className="card_group" key={title}>
          <article className="card" title={title}>
            <div className="box">
              <span></span><span></span><span></span>
            </div>
            <div className="img">
              <img src={isDark ? imgd : imgl} alt="Screenshot Load Error" />
            </div>
            <div className="title">
              <h5>{title}</h5>
              <a href={repo} title={`Github Repository of ${title}`}>Repo</a>
            </div>

          </article>
          <article className="card info_card" title={title}>
            <div className="box">
              <span></span><span></span><span></span>
            </div>
            <div className="info">
              <p>{desc}</p>
            </div>
          </article>
        </div>
      ))}
    </section>)
}
export default Project
