import { ProjectData } from "./ProjectData"
import "../styles/project.scss"
import { useEffect, useState } from "react"

const Project = () => {

  let [isDark, setDark] = useState(() => true);
  useEffect(() => {
    localStorage.getItem("theme") === "dark" ? setDark(() => true) : setDark(() => false);
  }, [])

  return (
    <div className="project">
      {ProjectData.map(({ imgd, imgl, repo, live, title, desc }): JSX.Element => (
        <div className="card_group" key={title}>
          <div className="card" title={title}>
            <div className="box">
              <span></span><span></span><span></span>
            </div>
            <div className="img">
              <img src={isDark ? imgd : imgl} alt="Screenshot Load Error" />
            </div>
            <div className="title">
              {live && <a href={live} title={`Live version of ${title}`}>Live</a>}
              <h5>{title}</h5>
              <a href={repo} title={`Github Repository of ${title}`}>Repo</a>
            </div>

          </div>
          <div className="card" title={title}>
            <div className="box">
              <span></span><span></span><span></span>
            </div>
            <div className="desc">
              <p>{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>)
}
export default Project
