

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Login.css"

export const Register = () => {
    const [user, setUser] = useState({
        email: "",        
        username: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("nutshell_user", JSON.stringify({
                        id: createdUser.id                        
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for G Free MOV</h1>
                <fieldset>
                    <label htmlFor="username"> Username </label>
                    <input onChange={updateUser}
                           type="text" id="username" className="input is-large"
                           placeholder="Enter your username" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="input is-large"
                        placeholder="Email address" required />
                </fieldset>
             
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
            <section className="link--login">
                {<Link to="/login">Need to Sign In?</Link>}
            </section>
        </main>
    )
}