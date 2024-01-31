import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LikeButton = ({setState}) => {
  const { restaurantId} = useParams()
  const [likes, setLikes] = useState(false);
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
                  return vote.restaurantId  == restaurantId && vote.liked == true
                }).length
                setVotes(filteredArray)

            })
    },
    [likes]
)
const handleSaveButtonClick = (event) => {
  event.preventDefault()

  const likeToSendToAPI ={
    userId: activeUserObject.id,
    restaurantId: +restaurantId,
    liked: true
  }

  return fetch(`http://localhost:8088/votes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likeToSendToAPI)
        })
            .then(r => r.json())
            .then(() => setLikes(true))
            // .then(setState)
}



  return (<>
    <form onSubmit={handleSaveButtonClick} >
      <button className="button is-warning" type="submit" >
        {votes} Likes
      </button>
    </form>
    
    
       

      
    
    
   </>)
};

export default LikeButton;

 