import { Link } from "react-router";

function Button (props){
  return(
    <>
    <Link to={props.link}>
    <button className={props.variant}>{props.text}</button>
    </Link>
    </>
  )
}
export default Button;