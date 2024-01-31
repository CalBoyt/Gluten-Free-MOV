import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const RequestForm = () => {
    const [request, update] =useState({
        request:""
    })

    const navigate = useNavigate()

    const localActiveUser = localStorage.getItem("active_user")
    const activeUserObject = JSON.parse(localActiveUser)

    const handleSaveButtonClick = (event) => {
                event.preventDefault()        

        // TODO: Create the object to be saved to the API
        const requestToSendToAPI ={
            userId: activeUserObject.id,
            request: request.request        
        }

        return fetch(`http://localhost:8088/requests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestToSendToAPI)
        })
            .then(r => r.json())
            .then(() => {
                navigate("/requests")

            })
    }

    return (
        <form className="requestForm">
            <h2 className="requestForm__title">New Request</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="request">Request:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Write your request"
                        value={request.request}
                        onChange={
                            (evt) => {
                                const copy = {...request}
                                copy.request = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Message
            </button>
        </form>
    )

 
}
