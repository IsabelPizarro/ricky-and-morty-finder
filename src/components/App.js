import React  from 'react';
import { Service } from "./Service";
import Filter from "./Filter";
import Card from "./Card";
import Loader from "./Loader";
// import Image from "./Image";
import '../App.css';


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chapters: [
        ],
      images:[],
        value:"",

       
      };
      this.handleInput = this.handleInput.bind(this);
 
    }
    componentDidMount() {
      this.getChapters();
    
    }
    getChapters() {
      Service().then(data => {
        // debugger;
        this.setState({ chapters: data.results });
        //  const dataC=data.results;
        //  const datatis=dataC.map(datos=>datos.characters[5]);
        //  console.log(datatis);
        //  for (let dat of datatis){
        //   //  console.log(dat);
        //   //  for (let datis of dat) {
             
        
 
        //   fetch(datatis)
        //   .then(response => response.json())
        //   .then(date=>{
        //     // console.log(date);
        //     let myImages = this.state.images;
        //     myImages.push(date);
        //     this.setState({ images: myImages }
        //       );

        //   }
        //     );
          
          
         
        // }
      
      
      });
    }
  
    handleInput(event) {
      const lookFor = event.currentTarget.value;
      this.setState({ value: lookFor });
      
    }


  render() {
    const {chapters, value}=this.state;
    // console.log(images);

    return (
      <div className="App">
        <div className="App-header">
        <h6 className="mainTitle">Buscador de capítulos</h6>
      <Filter  handleInput={this.handleInput}/>
        </div>
        <div className="containerCards">
        {(chapters=="") ? <Loader/>  :
          chapters.filter(filterChapter =>
          filterChapter.name
         .toUpperCase()
          .includes(value.toUpperCase()))
        .map((chapter,i)=>
        
        <Card chapter={chapter} i={i} />)}
        
  
        </div>
        <footer className="page-footer">
        <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright 
            </div>
           
          </div>
          </footer>
      </div>
    );
  }
}

export default App;
