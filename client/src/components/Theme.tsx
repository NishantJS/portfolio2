import "../styles/theme.scss";

interface Props{
  isDarkTheme: boolean,
  updateTheme: () => void
}

const Theme = (props: Props): JSX.Element => {
  return (
    <div className="theme_toggle" aria-checked={props.isDarkTheme}>
      <input type="checkbox" id="theme_checkbox" />
      <label htmlFor="theme_checkbox" className={`toggle ${props.isDarkTheme ? "dark" : ""}`} onClick={()=>props.updateTheme()} title={`Switch to ${props.isDarkTheme ? "light" : "dark"} mode`}>
        <h6 className="theme_title">go {props.isDarkTheme ? "Light" : "Dark"}</h6>
        
        <span className={`toggle_handler ${props.isDarkTheme ? "theme_change" : ""}`}>
        </span>
      </label>
    </div>
  );
}

export default Theme;
