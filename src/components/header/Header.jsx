import "./header.css"

export default function Header() {
  return (
    <div className="header ">
         <div className="headertittle">
            <span className="headtittlesm">React & node</span>
            <span className="headtittlelg">Blog</span>
         </div>
         <img
         className="headerimg"
         src="pex.jpg"
         alt=""
         ></img>
    </div>
  )
}
