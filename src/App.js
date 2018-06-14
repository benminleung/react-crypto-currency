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
      search: '',
      // default amount of results to show
      resultsToShow: 20,
      // the amount of results showing
      resultsShowing: 0,
      //the total number of results
      numberOfResults: 0,
      ascending: true
    }; 

    this.searchChange = this.searchChange.bind(this); 
    this.sortChange = this.sortChange.bind(this);
    this.showAll = this.showAll.bind(this);
    this.ascendingChange = this.ascendingChange.bind(this);
    this.resultsToShowChange = this.resultsToShowChange.bind(this);
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
        filteredData: myJson,
        numberOfResults: myJson.length,
        resultsShowing: this.state.resultsToShow
      });
    })
  }

  searchChange(state) {
    // console.log('searchChange triggered');
    let [newFilteredData, newSort, newSearch] = state;
    this.setState({
      numberOfResults: newFilteredData.length,
      filteredData: newFilteredData,
      sort: newSort,
      search: newSearch,
      resultsShowing: Math.min(this.state.resultsToShow, newFilteredData.length)
    });
    
  }

  sortChange(filteredDataAndSort){
    // console.log('sortChange triggered');
    let [newFilteredData, newSort] = filteredDataAndSort;
    this.setState({
      numberOfResults: newFilteredData.length,
      filteredData: newFilteredData,
      sort: newSort
    })
  }

  showAll(){
    this.setState({
      resultsShowing: this.state.numberOfResults
    });
  }

  ascendingChange(ascendingTruthy) {
    this.setState({
      ascending: this.state.ascending ? false : true
    });
  }

  resultsToShowChange(num) {
    this.setState({
      resultsToShow: num,
      resultsShowing: Math.min(num, this.state.filteredData.length)
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <SecHeader />
          <SecSearch state={this.state} searchChange={this.searchChange} sortChange={this.sortChange} ascendingChange={this.ascendingChange} resultsToShowChange={this.resultsToShowChange}/>
          <SecBody state={this.state} showAll={this.showAll} />
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
