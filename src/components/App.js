import React  from 'react';
import { Service } from "./Service";
import '../App.css';





  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chapters: [],
       
      };

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
  render() {
    return (
      <div className="App">
        <div className="App-header">
      Buscador de campítulos:
        </div>
       cuerpo
      </div>
    );
  }
}

export default App;
