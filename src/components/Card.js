import React from "react";
 import Image from "./Image";
 class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[]
    

     
    };
    // this.handleInput = this.handleInput.bind(this);

  }
  componentDidMount() {
    this.getCharacters();
  
  }
  getCharacters(){

   

  // console.log(this.props.chapter)
  //  const { chapter, i,image } = props;
     console.log(this.props.chapter.characters);
     const fetchChapter=this.props.chapter.characters;
     for (let cha of fetchChapter)
     fetch(cha)
     .then(response => response.json())
     .then(date=>{
      let myImages = this.state.images;
         myImages.push(date);
         this.setState({ images: myImages }
      // this.setState({ images: date }
        );
     

     }
       );
    }
    render(){
       const { chapter, i } = this.props;
       const {images}=this.state;
     
 const tal=this.state.images.map(lo=>console.log(lo));

  return (

 <ul className="card" id={i}>

<li>
{/* <img src={image} alt={i}/> */}
<div class="row">
    {/* <div class="col s12 m6"> */}
    {/* {images.name} */}
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
        <p>{chapter.episode}</p>
        
          <span class="card-title">{chapter.name}</span>
          
        </div>
        <div class="card-action">
         
        <small>{chapter.air_date}</small>
        <Image image={images}/>
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
 }
export default Card;