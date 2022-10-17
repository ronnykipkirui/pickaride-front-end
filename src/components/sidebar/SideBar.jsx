import "./sidenav.css"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebaritem">
                <span className="sidebartittle">ABOUT ME</span>
                <img className="sidebarimg"
                    src="ava.jpeg" alt=""></img>
                <p className="sidebarpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. c
                    nulla iure! Laudantium vitae iure unde minus nihil dolore?</p>
            </div>
            <div className="sidebaritem">
                <span className="sidebartittle">CATEGORIES</span>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">life</li>
                    <li className="sidebarlistitem">music</li>
                    <li className="sidebarlistitem">cinema</li>
                    <li className="sidebarlistitem">tech</li>
                    <li className="sidebarlistitem">sport</li>
                    <li className="sidebarlistitem">style</li>
                </ul>
            </div>
            <div className="sidebaritem">
                <span className="sidebartittle">FOLLOW US</span>
                <i className="sidebaricon fa-brands fa-facebook"></i>
                <i className="sidebaricon fa-brands fa-twitter"></i>
                <i className="sidebaricon fa-brands fa-instagram"></i>
            </div>
        </div>
    )
}
