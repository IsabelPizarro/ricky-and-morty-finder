import React from "react";
 import Image from "./Image";

const Card = props => {
   
   const { chapter, i,image } = props;
    // console.log(images);

  return (

 <ul className="card" id={i}>

<li>
<img src={image} alt={i}/>
<div class="row">
    {/* <div class="col s12 m6"> */}
    
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
        <p>{chapter.episode}</p>
          <span class="card-title">{chapter.name}</span>
          
        </div>
        <div class="card-action">
         
        <small>{chapter.air_date}</small>
          
        </div>
      </div>
    </div>
  {/* </div> */}
  </li>
   {/* <li>
    <Image cha={cha}/>
<small>{chapter.episode}</small>
<h4>{chapter.name}</h4>
<small>{chapter.air_date}</small>
</li> */}
  </ul>
    
  );
};

export default Card;