import { ProjectData } from "./ProjectData"
import "../styles/project.scss"
import { Fragment } from "react"

interface Props{
  isDarkTheme : boolean
}

const Project = (props: Props) => {

  return (
    <section className="project">
      {ProjectData.map(({ imgd, imgl, repo, title, desc, live }): JSX.Element => (
        <div className="card_group" key={title}>
          <article className="card" title={title}>
            <div className="box">
              <span></span><span></span><span></span>
            </div>
            <div className="img">
              <a href={props.isDarkTheme ? imgd : imgl} target="_blank" rel="noopener noreferrer"><img src={props.isDarkTheme ? imgd : imgl} alt="Screenshot Load Error" /></a>
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
