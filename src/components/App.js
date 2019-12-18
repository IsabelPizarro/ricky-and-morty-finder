import React  from 'react';
import { Service } from "./Service";
import Filter from "./Filter";
import Card from "./Card";
import Loader from "./Loader";
import '../App.css';


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chapters: [],
      cha:[],
        value:"",

       
      };
      this.handleInput = this.handleInput.bind(this);
      // this.getImage=this.getImage.bind(this);
    }
    componentDidMount() {
      this.getChapters();
      // this.getImage();
    }
    getChapters() {
      Service().then(data => {
         
         const dataC=data.results;
          console.log(dataC.length);
         const datatis=dataC.map(datos=>datos.characters[5]);
          console.log(datatis.length);
       this.setState({ chapters: data.results });
       this.setState({ cha: datatis });
      
      });
    }
  
    handleInput(event) {
      const lookFor = event.currentTarget.value;
      this.setState({ value: lookFor });
      
    }


  render() {
    const {chapters, value,cha}=this.state;
    console.log(cha);

    return (
      <div className="App">
        <div className="App-header">
      Buscador de campítulos:
      <Filter  handleInput={this.handleInput}/>
        </div>
        <div className="containerCards">
        {(chapters=="") ? <Loader/>  :
          chapters.filter(filterChapter =>
          filterChapter.name
         .toUpperCase()
          .includes(value.toUpperCase()))
        .map((chapter,i)=>
        <Card chapter={chapter} cha={cha} i={i}/>)}
        </div>
      </div>
    );
  }
}

export default App;
