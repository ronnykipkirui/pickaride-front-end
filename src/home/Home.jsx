import Post from "../post/Post"
import SideBar from "../sidebar/SideBar"
import "./home.css"

export default function Home() {
  return (

    <>
       <div className="home">
      
      <Post/>
      <SideBar/>
    </div>
    </>
 
  )
}
