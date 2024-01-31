import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';


const CardBox = (props) => {
  return <div className="card-body">{props.children}</div>;
};
const Image = (props) => {
  return <img src={props.image} alt="Logo" className="picture" />;
};
const Name = (props) => {
  return <div className="name">{props.name}</div>;
};
const Details = (props) => {
  return <div className="details">{props.details}</div>;
};
const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className={selected ? 'star selected' : 'star'} onClick={onClick}></div>
);
const Card = (props) => {
  const navigate = useNavigate()
  return (
    <CardBox>
      <button onClick={() => navigate(`/review/${props.id}`)}>Click here for our Review of {props.name}</button>
      <div className="inner-body">
        <Image image={props.image} />
        <div className="body">
          <div className="inner-body">
            <Name name={props.name} />
          </div>
          <Details details={props.details} />
          <div className='bottom'>
          <div className="inner-body">
          <label className="label is-medium pr-3">G Free MOV's Rating:</label>
            
            {[...Array(5)].map((n, i) => (
              <Star
                key={i}
                selected={i < props.starsSelected}
                onClick={() => props.change(props.id, i + 1)}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </CardBox>
  );
};
export default Card;