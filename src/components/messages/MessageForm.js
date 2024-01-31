import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const MessageForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [message, update] = useState({
        message: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()

   const localActiveUser = localStorage.getItem("active_user")
   const activeUserObject = JSON.parse(localActiveUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()        

        // TODO: Create the object to be saved to the API
        const messageToSendToAPI ={
            userId: activeUserObject.id,
            message: message.message        
        }


        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageToSendToAPI)
        })
            .then(r => r.json())
            .then(() => {
                navigate("/messages")

            })
    }

    return (
        <form className="messageForm">
            <h2 className="messageForm__title">New Message</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Write your message"
                        value={message.message}
                        onChange={
                            (evt) => {
                                const copy = {...message}
                                copy.message = evt.target.value
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