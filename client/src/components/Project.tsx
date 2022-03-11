import { ProjectData } from "./ProjectData"
import "../styles/project.scss"
import { useEffect, useState, Fragment } from "react"

const Project = () => {

  let [isDark, setDark] = useState(() => true);
  useEffect(() => {
    localStorage.getItem("theme") === "dark" ? setDark(() => true) : setDark(() => false);
  }, [])

  return (
    <section className="project">
      {ProjectData.map(({ imgd, imgl, repo, title, desc, live }): JSX.Element => (
        <div className="card_group" key={title}>
          <article className="card" title={title}>
            <div className="box">
              <span></span><span></span><span></span>
            </div>
            <div className="img">
              <a href={isDark ? imgd : imgl} target="_blank" rel="noopener noreferrer"><img src={isDark ? imgd : imgl} alt="Screenshot Load Error" /></a>
            </div>
            <div className="title">
              {live && <a href={live} title={`Live version of ${title}`} target="_blank" rel="noopener noreferrer">Live</a>}
              <h5>{title}</h5>
              <a href={repo} title={`Github Repository of ${title}`} target="_blank" rel="noopener noreferrer">Repo</a>
            </div>

          </article>
          <article className="card info_card" title={title}>
            <div className="box">
              <span></span><span></span><span></span>
            </div>
            <div className="info">
              <p>{desc.split("__$__").map((e,i) => {
                if (i % 2 !== 0) return <u key={i}>{e}</u>
                return <Fragment key={i}>{ e}</Fragment>
              }) }</p>
            </div>
          </article>
        </div>
      ))}
    </section>)
}
export default Project
