import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Comments = () => {
    const { restaurantId} = useParams()
    const [comments, setComments] = useState([]);

    useEffect(
        () => {
            fetch(`http://localhost:8088/comments`)
            .then(r => r.json())
            .then((commentArray) => {
               let filteredArray = commentArray.filter(com => {
                    return com.restaurantId == restaurantId
                })
                setComments(filteredArray)
            })
        },
        []
    )

    return <>
            
        {comments.map( (com) => {
            return <div className="comments">"{com.comment}"</div>

        })}
    </>
}