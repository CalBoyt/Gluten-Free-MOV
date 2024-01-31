import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DislikeButton = ({setState}) => {
  const { restaurantId} = useParams()
  const [dislikes, setDislikes] = useState(true);
  const [votes, setVotes] = useState(0);
  const localActiveUser = localStorage.getItem("active_user")
  const activeUserObject = JSON.parse(localActiveUser)
  const navigate = useNavigate()

  useEffect(
    () => {
        fetch(`http://localhost:8088/votes`)
            .then(r => r.json())
            .then((voteArray) => {
                let filteredArray = voteArray.filter(vote => {
                  return vote.restaurantId == restaurantId && vote.liked == false
                }).length
                setVotes(filteredArray)

            })
    },
    [dislikes]
)
const handleSaveButtonClick = (event) => {
  event.preventDefault()

  const dislikeToSendToAPI ={
    userId: activeUserObject.id,
    restaurantId: +restaurantId,
    liked: false
  }

  return fetch(`http://localhost:8088/votes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dislikeToSendToAPI)
        })
            .then(r => r.json())
            .then(() => setDislikes(false))
            // .then(setState)
}



  return (<>
    <form onSubmit={handleSaveButtonClick} >
      <button className="button is-warning" type="submit" >
        {votes} Dislikes
      </button>
    </form>
    
    
       

      
    
    
   </>)
};

export default DislikeButton;

 