import { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';



export const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([
  ]);
  const navigate = useNavigate()

  useEffect(
    () => {
        fetch(`http://localhost:8088/restaurants`)
        .then(r => r.json())
        .then((restaurantArray) => {
            setRestaurants(restaurantArray)
        })
    },
    []
    )

  const onChange = (id, starsSelected) => {
    setRestaurants(
      [...restaurants].map((restaurant) => {
        if (restaurant.id === id) {
          restaurant.starsSelected = starsSelected;
        }
        return restaurant;
      })
    );
  };

  return (
    <div className='container'>
      <div className='box title is-1'>Restaurants</div>
    <div className="main-body">
      {[...restaurants].map((restaurant, index) => (
        <Card
        key={index}
        name={restaurant.name}
        details={restaurant.details}
        image={restaurant.image}
        starsSelected={restaurant.starsSelected}
        id={restaurant.id}          
        change={(id, starsSelected) => onChange(id, starsSelected)}
        />
        
      ))}
    </div>
    </div>
  );
}