import classes from "./Title.module.css";

/**
 *
 * @param {Object} props
 * @param {*} props.reactRef
 * @returns
 */
function Title(props) {
  return (
    <h1 ref={props.reactRef} className={classes.title}>
      {props.children}
    </h1>
  );
}

export default Title;
