
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
    const [email, set] = useState("cal@me.com")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const res = await fetch(`http://localhost:8088/users?email=${email}`);
        const foundUsers = await res.json();
        if (foundUsers.length === 1) {
            const user = foundUsers[0];
            localStorage.setItem("active_user", JSON.stringify({
                id: user.id
            }));

            navigate("/");
        }
        else {
            window.alert("Invalid login");
        }
    }

    return (
        <main className="container--login">
        <form className='form--login' onSubmit={handleLogin}>
        <div className="field" >
            <label className="label is-large">Please Sign In</label>
            <p className="control">
                <input className="input is-large" type="email" placeholder="Email" 
                value={email}
                            onChange={evt => set(evt.target.value)}/>
            </p>            
        
        <p className="control">
          <button className="button is-warning is-large">
            Sign In
          </button>
        </p>
        <p className='link--register'>
            <Link to="/register">Not a Member Yet? Sign Up Here!</Link>
        </p>
        </div>
        </form>
        </main>
    )
}
