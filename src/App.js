import React, { Component } from "react";
import "./App.css";
import SecHeader from "./SecHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <SecHeader />
          <section className="secSearch">
            <input
              className="searchBar"
              type="text"
              id="searchBar"
              placeholder="Search"
            />
            <div className="sortBar" id="sortBar">
              <div>Sort by</div>
              <label className="sortBtn btnShadow active" id="sortByrank">
                Rank
              </label>
              <label className="sortBtn btnShadow" id="sortByname">
                Name
              </label>
              <label className="sortBtn btnShadow" id="sortByprice_usd">
                Price
              </label>
              <label
                className="sortBtn btnShadow"
                id="sortBypercent_change_24h"
              >
                Change
              </label>
            </div>
          </section>
          <section className="secBody" id="secBody" />

          <section className="secFooter">
            <div>Footer</div>
          </section>

          <section>
            All rights reserved. Designed by Pok Tik Benjamin Leung.
          </section>
        </div>
      </div>
    );
  }
}

export default App;
