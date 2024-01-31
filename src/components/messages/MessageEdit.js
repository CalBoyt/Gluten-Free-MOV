
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const MessageEdit = () => {

    const [message, assignMessage] = useState({
        message: ""
    })

    const { messageId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/messages/${messageId}`)
            .then(r => r.json())
            .then((data) => {
                assignMessage(data)
            }) 
    }, [messageId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/messages")
            }) 
    }

    return (
        <form className="messageForm">
            <h2 className="messageForm__title">Edit Message</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "10rem"
                        }}
                        className="form-control"
                        placeholder="Edit Message"
                        value={message.message}
                        onChange={
                            (evt) => {
                                // TODO: Update state with a modified copy
                                const copy = { ...message}
                                copy.message = evt.target.value
                                assignMessage(copy)
                            }
                        }>{message.message}</textarea>
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