import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
    return (
        <div className="top">


            <div className="topLeft">
                <h1 className="topicon">My Blog Page </h1>
                {/* <i className="topicon fa-brands fa-facebook"></i>
                <i className="topicon fa-brands fa-twitter"></i>
                <i className="topicon fa-brands fa-instagram"></i> */}
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="register">Contacts</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="write">Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="ava.jpeg" alt="icon" />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">Login</Link>
                            </li>

                            <li className="topListItem">
                                <Link className="link" to="/Register">Register</Link>
                            </li>

                        </ul>
                    )
                }

                <i className="topsearch icon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}
