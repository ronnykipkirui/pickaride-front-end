import "./setting.css"
import SideBar from "../../components/sidebar/SideBar"
export default function Setting() {
  return (
    <div className="setting"> 
      <div className="settingwrapper">
        <div className="settingtittle">
            <span className="updatetittle">Update your account</span>
            <span className="deletetittle">Delete Account</span>
        </div>
        <form className="settingform">
            <label>profile picture</label>
            <div className="settingpp">
                <img src="ava.jpeg" alt="" />
                <label htmlFor="fileinput">
                <i className="settingicon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}}/>
            </div>
            <label>Uaername</label>
            <input type="text"  placeholder="Ronny"/>
            <label>Email</label>
            <input type="text"  placeholder="ronny@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingssubmit">Update</button>
        </form>
      </div>
      <SideBar/>
    </div>
  )
}
