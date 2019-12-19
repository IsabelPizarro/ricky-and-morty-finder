  import React from "react";
class Image extends React.Component {



  render() {
     const { image } = this.props;
      // console.log(image.image);
    return (
      <div>
        <ul>
        <li>
        {image.name}
        </li>
        </ul>
  
      <img src={image.image} alt="ejej"/>
      
      {/* {image.name} */}
        
        
        
      </div>
    );
  }
}


export default Image;