import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">


    <div className="topLeft">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-instagram"></i>
    </div>
    <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Write</li>

        </ul>
    </div>
    <div className="topRight">
        <img className="topImg" src="ava.jpeg" alt="icon"></img>
        <i className="topsearch icon fa-solid fa-magnifying-glass"></i>
    </div>

</div>
  )
}
