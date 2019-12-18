  import React from "react";
class Image extends React.Component {

  // getlasimagenes() {
  //   fetch('https://rickandmortyapi.com/api/episode/')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((empleados) => {
  //       console.log(empleados);
  //     })
  // }


  render() {
     const { cha } = this.props;
     console.log(cha);
    return (
      <div>
        hola
        {/* {fetch(lala)
              .then((response) => {
                return response.json()
              })
              .then((empleados) => {
                console.log(empleados);
              })
        } */}
      </div>
    );
  }
}



export default Image;