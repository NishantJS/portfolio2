import "../styles/about.scss";

const About = (): JSX.Element => {
  const resume = `https://www.canva.com/design/DAEX4Lk1kc8/jCKYdEsurGtq84cqmMipJQ/view?utm_content=DAEX4Lk1kc8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`;

  return (
    <div className="about">
      <span className="hello_txt">HELLO</span>
      <h1><span className="imp_primary">I'm</span> Nishant Chorge.</h1>
      <h3>I Love building things for <span className="imp_primary">web</span >.</h3>
      <h3>I want to make things that make a <span className="imp_primary">difference</span>.</h3>
      <h3>I'm a web developer living in <span className="imp_primary">Maharashtra, India</span>.</h3>
      <button>
        <a href={resume} title="Resume">Resume</a>
      </button>
      <a className="secondary_btn" href="mailto:nishantchorge79@gmail.com">Mail me</a>
    </div>
  )
}

export default About;
