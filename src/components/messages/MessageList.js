import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const MessageList = () => {
    const [ messages, setMessages ] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/messages?_expand=user`)
                .then(r => r.json())
                .then((messageArray) => {
                    const reversedMessages = messageArray.reverse();
                    setMessages(reversedMessages)

                })
        },
        []
    )

    const deleteButton = (messageId) => {
        return <button onClick={() =>{
            fetch(`http://localhost:8088/messages/${messageId}`, {
                method: "DELETE"
            })
                .then(() =>{
                    fetch(`http://localhost:8088/messages?_expand=user`)
                    .then(r => r.json())
                    .then((messageArray) => {
                        const reversedMessages = messageArray.reverse();
                        setMessages(reversedMessages)
        
                    })
                })
        }} className="message_delete">Delete</button>
    }
    return (<>
    <div className="container">
        <div className='box title is-1'>Messages
        <div className="box title is-4">A place to connect with others in the gluten-free community</div>
        </div>
            <button className="button is-warning" onClick={() => navigate("/messageForm")}>Create Message</button>
        
                <article className="messages">
                    {
                    messages.map(
                    (message) => {
                        return <section className="box has-background-black-ter">
                                <Link to={`/messages/${message.id}/edit`}>{message?.user?.username}'s message:</Link>
                                <div>{message.message}</div>
                                {
                                    deleteButton(message.id)
                                }
                            </section>
                            
                        
                        
                        
                    }
                )
            }
        </article>
    </div>
    </>
    )
}
