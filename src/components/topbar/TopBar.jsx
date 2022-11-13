import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
//   const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <h1 className="topicon">PickaRide </h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="cars">
              Cars
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="contact">
              Contact us
            </Link>
          </li>
          <li className="topListItem"></li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
              Login
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/Register">
              Register
            </Link>
          </li>
        </ul>

        <i className="topsearch icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
