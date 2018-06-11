import React, {Component} from 'react';

class SecSearch extends Component {
    render(){
        return (<section className='SecSearch'>
            <input
              className="searchBar" type="text" id="searchBar" placeholder="Search"/>
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
              <label className="sortBtn btnShadow" id="sortBypercent_change_24h">
                Change
              </label>
            </div>
        </section>)
    }
}

export default SecSearch;