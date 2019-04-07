import React, { Component } from 'react';
import './App.css';
import  GenerateQuote  from  './Components/GenerateQuote';
import  DisplaySimpson  from  './Components/DisplaySimpson';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      character: ''
    };
  } 

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          character:  data[0],
        });
    });
}

  render() {
    return (
      
      <div className="App">
        <GenerateQuote  selectQuote={() =>  this.getQuote()}  />
        <DisplaySimpson  character={this.state.character}  />
      </div>
    );
  }
}

export default App;
