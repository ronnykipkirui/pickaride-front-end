import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="logintittle">Login</span>
            
            <form className="loginform">
                <label>Email</label>
                <input className="logininput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="logininput" type="text" placeholder="Enter your password..." />
                <button className="loginbutton">Login</button>
                <button className="registerbutton">Register</button>
            </form>
        </div>
    )
}
