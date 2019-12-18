import React from "react";
 import Image from "./Image";

const Card = props => {
   
   const { chapter, i,cha } = props;
//    console.log(cha);

  return (

 <ul className="card" id={i}>
    <Image cha={cha}/>
<small>{chapter.episode}</small>
<h4>{chapter.name}</h4>
<small>{chapter.air_date}</small>
  </ul>
    
  );
};

export default Card;