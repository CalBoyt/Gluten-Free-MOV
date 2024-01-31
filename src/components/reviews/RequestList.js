import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const RequestList = () => {
    const [ requests, setRequests ] = useState([])
    const navigate = useNavigate()
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/requests?_expand=user`)
                .then(r => r.json())
                .then((requestArray) => {
                    setRequests(requestArray)

                })
        },
        []
    )

    return <>

<div className="container">
<div className='box title is-1'>Request Wall
    <div className="box title is-4">Would you like for us to review a restaurant?</div>
</div>
    <button className="button is-warning" onClick={() => navigate("/requestForm")}>Create Request</button>
        <article className="requests">
            {
                requests.map(
                    (request) => {
                        return <section className="box has-background-black-ter">
                            <section>{request?.user?.username}'s request:</section>
                            <div>{request.request}</div>
                            
                        </section>
                        
                        
                    }
                )
            }
        </article>
    </div>
    </>

}