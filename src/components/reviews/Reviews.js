import { useEffect, useState, React } from 'react';
import Card from '../restaurants/Card';
import { Link, useParams } from 'react-router-dom';

import LikeButton from './Likes';
import DislikeButton from './Dislikes';
import { Comments } from '../comments/Comments';



export const Reviews = () => {
  const { restaurantId} = useParams()
  const [restaurant, setRestaurant] = useState({})
  
  const [countUp, setCountUp] = useState(0)
  const [countDown, setCountDown] = useState(0)
  
  const setState = () => {

  return  fetch(`http://localhost:8088/restaurants/${restaurantId}`)
    .then(r => r.json())
    .then((restaurantObject) => {
      setRestaurant(restaurantObject)
    })
  }

  useEffect(
    () => {
      setState()
    },
    []
    )

  return (
    <>     
<div className='container'> 
<div className='box title is-1'>{restaurant.name}</div>    
<div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification has-background-black-ter">
          <p className="title">Have you eaten at {restaurant.name}?</p>
          <p className="subtitle">cast your vote:</p>
    <div className='columns'>
    <div class="column">
      <i className="bi bi-hand-thumbs-up"></i>
      <LikeButton setState={setState} />
    </div>
    <div class="column">
      <i className="bi bi-hand-thumbs-down"></i>
      <DislikeButton /> 
    </div>
       
    </div>
        </article>
        <article className="tile is-child notification has-background-black-ter">
          <p className="title">User Comments:</p>
          <p className="subtitle">What others are saying</p>
          <h3 className='subtitle has-text-centered'>
            <Comments /></h3>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification has-background-black-ter">
          <figure className="image is-4by3 mb-4">
          <img src={restaurant.image}></img>
          </figure>
          <p className="title">{restaurant.name}</p>
          <p className="subtitle">{restaurant.details}</p>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification has-background-black-ter">
        <p className="title">Our Review of {restaurant.name} </p>
        <p className="subtitle">(Our reviews are based primarily on the availability of gluten-free food and practices to limit cross-contamination)</p>
        <div className="content">
        
      <div className="review">
        {restaurant.review}
      </div>
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification has-background-black-ter">
      <div className="content">
        <p className="title">Food</p>
        <p className="subtitle">Some things we tried:</p>
        <figure className="image is-rounded">
        <img src={restaurant.foodImg1}></img>
        <div className='caption'>{restaurant.caption1}</div>
          </figure>
          <figure className="image is-rounded">
        <img src={restaurant.foodImg2}></img>
        <div className='caption'>{restaurant.caption2}</div>
          </figure>
          <figure className="image is-rounded">
        <img src={restaurant.foodImg3}></img>
        <div className='caption'>{restaurant.caption3}</div>
          </figure>
        <div className="content">
          {/* <!-- Content --> */}
        </div>
      </div>
    </article>
  </div>
</div>
</div>
    
    
    {/* <li className="comment">
      <h1>comment</h1>
        <Link className='comment' to="/comments?_expand=restaurant/`"></Link>
      </li> */}
    </>
  );

}