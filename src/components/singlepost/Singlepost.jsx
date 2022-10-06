import "./singlepost.css"

export default function Singlepost() {
    return (
        <div className="singlepost">
            <div className="singlepostwrapper">
                <img className="singlepostimg" src="pex2.jpg" alt="" />
                <h1 className="singleposttittle">
                    Lorem ipsum
                </h1>
                <div className="singlepostedit">
                    <i className="singleposticon fa-solid fa-pen-to-square"></i>
                    <i className="singleposticon fa-solid fa-trash"></i>
                   
                </div>
                <div className="singlepostinfo">
                    <span className="singlepostauthor">Author: <b>Ronny</b></span>
                    <span className="singlepostdate">1 hour ago</span>
                </div>
                <p className="singlepostdesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In earum
                    minus eveniet obcaecati iusto, molestias illum quidem quos corrupti
                    sequi eum voluptates quaerat veniam rerum sed illo expedita. Quam, omnis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In earum
                    minus eveniet obcaecati iusto, molestias illum quidem quos corrupti
                    sequi eum voluptates quaerat veniam rerum sed illo expedita. Quam, omnis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In earum
                    minus eveniet obcaecati iusto, molestias illum quidem quos corrupti
                    sequi eum voluptates quaerat veniam rerum sed illo expedita. Quam, omnis.
                    </p>
            </div>
        </div>
    )
}
