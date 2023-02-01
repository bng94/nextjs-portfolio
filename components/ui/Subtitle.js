import classes from "./Subtitle.module.css";

function Subtitle(props) {
  return (
    <h2 className={`${classes.subtitle} ${props.classes}`}>{props.children}</h2>
  );
}

export default Subtitle;
