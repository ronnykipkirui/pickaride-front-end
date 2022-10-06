import SideBar from "../../components/sidebar/SideBar"
import Singlepost from "../../components/singlepost/Singlepost"
import "./single.css"

export default function Single() {
  return  (
    <div className="single">
      {/* post */}
   
      <Singlepost/>
      <SideBar/>
    </div>
  )
}
