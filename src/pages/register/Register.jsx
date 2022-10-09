import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Register() {
    const url = "http://localhost:8000/users"
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })
    function submit(e) {
        e.preventDefault()
        fetch('http://localhost:8000/users', {
            
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Success:',data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // fetch.post(url, {
        //     username: data.username,
        //     email: data.email,
        //     password: data.password
        // })
        // .then(res=>{
        //     console.log(res.data)
        // })

    }
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div className="register">
            <span className="registertittle">Register</span>

            <form onSubmit={(e) => submit(e)} className="registerform">
                <label>Username</label>
                <input onChange={(e) => handle(e)} id="username" value={data.username} className="registerinput" type="text" placeholder="Enter your username.." />
                <label>Email</label>
                <input onChange={(e) => handle(e)} id="email" value={data.email}
                    className="registerinput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input onChange={(e) => handle(e)} id="password" value={data.password}
                    className="registerinput" type="text" placeholder="Enter your password..." />
                <button className="registerbutton">
                    <Link className="link" to="/login">Login</Link>
                </button>
                <button className="loginbutton">
                    <Link className="link" to="/Register">Register</Link>
                </button>
            </form>
        </div>
    )
}
