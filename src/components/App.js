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
        value:"",
       
      };
      this.handleInput = this.handleInput.bind(this);
    }
    componentDidMount() {
      this.getChapters();
    }
    getChapters() {
      Service().then(data => {
        console.log(data.results);
       this.setState({ chapters: data.results });
      });
    }
    handleInput(event) {
      const lookFor = event.currentTarget.value;
      this.setState({ value: lookFor });
      console.log(lookFor);
    }


  render() {
    const {chapters, value}=this.state;

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
        <Card chapter={chapter}/>)}
        </div>
      </div>
    );
  }
}

export default App;
