import { Link } from "react-router-dom";

export default function Employee(props) {
  return (
    <div className="class-body">
      <Link to={`/${props.name}`} className="name">
        {props.name}
      </Link>
      <p className="title">{props.title}</p>
      <img src={props.img} alt="Employee Image" />
    </div>
  );
}
