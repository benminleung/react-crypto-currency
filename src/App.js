import React, { Component } from "react";
import "./App.css";
import SecHeader from "./SecHeader";
import SecSearch from "./SecSearch";
import SecBody from "./images/SecBody";
import SecFooter from "./SecFooter";
import "./data/dataShort";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    // fetch("https://api.coinmarketcap.com/v1/ticker/?limit=2000")
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20")
    // fetch(dataShort)
    .then(response => {
      return response.json();
    }).then(myJson => {
      this.setState({data: myJson});
    })
    
}
  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <SecHeader />
          <SecSearch />
          <SecBody data={this.state.data}/>
          <SecFooter />
          <section>
            All rights reserved. Designed by Pok Tik Benjamin Leung.
          </section>
        </div>
      </div>
    );
  }
}

export default App;
