import React from "react";

const Card = props => {
   
   const { chapter, i} = props;
  return (
 <ul className="card" id={i}>
<li>
  <div className="row">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
        <p>{chapter.episode}</p>
          <span className="card-title">{chapter.name}</span>    
        </div>
        <div className="card-action">
          <small>{chapter.air_date}</small>
        </div>
      </div>
  </div>
  </li>
  </ul>
    
  );
};

export default Card;