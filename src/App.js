import React, { Component } from "react";
import "./App.css";
import SecHeader from "./SecHeader";
import SecSearch from "./SecSearch";
import SecBody from "./images/SecBody";
import SecFooter from "./SecFooter";
// import jsonData from "./data/dataShort";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      sort: 'rank',
      search: ''
    }; 

    this.searchChange = this.searchChange.bind(this); 
    this.sortChange = this.sortChange.bind(this);

  }

  componentDidMount(){
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=2000")
    // fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20")
    // fetch(" ")
    .then(response => {
      return response.json();
    }).then(myJson => {
      this.setState({
        data: myJson,
        filteredData: myJson
      });
    })
  }

  searchChange(state) {
    let {newData, newFilteredData, newSort, newSearch} = state;
    // console.log(state);
    this.setState(state);
  }

  sortChange(filteredData, sort){
    // console.log(filteredData, ' ', sort);
    this.setState({
      data: this.state.data,
      filteredData: filteredData,
      sort: sort,
      search: this.state.search
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <SecHeader />
          <SecSearch state={this.state} searchChange={this.searchChange} sortChange={this.sortChange}/>
          <SecBody data={this.state.filteredData}/>
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
