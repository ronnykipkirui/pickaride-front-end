import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registertittle">Register</span>
            
            <form className="registerform">
            <label>Username</label>
                <input className="registerinput" type="text" placeholder="Enter your username.." />
                <label>Email</label>
                <input className="registerinput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="registerinput" type="text" placeholder="Enter your password..." />
                <button className="registerbutton">Login</button>
                <button className="loginbutton">Register</button>
            </form>
        </div>
    )
}
