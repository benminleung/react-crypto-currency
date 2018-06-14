import React from 'react';
import SortOrderBtn from './smallComponents/SortOrderBtn';

const SecSearch = (props) => {

  const applySort = (data, sort = props.state.sort) => {
    // console.log(data,'and', sort)
    switch (sort) {
      case 'rank':
      case 'price_usd':
      case 'percent_change_24h':
        return [
          data.slice().sort((a,b) => {return a[sort] - b[sort]}),
          sort
        ];
        break;

      case 'name':
        // console.log(data.slice(0), ' dataSlice');
        const sortedData = data.slice(0).sort((a,b) => {
            const first = a[sort].toLowerCase();
            const second = b[sort].toLowerCase();
            // console.log(first + " ---vs--- " + second);
            if (first < second){
                return -1;
            } else if (first > second){
                return 1;
            } else {
                return 0;
            }
        });
        // console.log(sortedData, " sortedData");
        return [
          sortedData,
          sort
        ];
        break;
    } 
  }

  // filters the results to the input and returns an array
  const applyFilter = (searchValue) => {
    // console.log(searchValue);
    // console.log(props.state.data);
    // console.log(props.state.data.filter((item) => {return item.name.toLowerCase().includes(searchValue)}));
    const returnData = searchValue
    ? props.state.data.filter((item) => {return item.name.toLowerCase().includes(searchValue)})
    : props.state.data;

    return [
      applySort(returnData)[0],
      props.state.sort,
      searchValue
    ]
  }
  
  //sets active class for the selected sort method
  const active = (sortButton) => {
    // console.log(props.sort)
    return props.state.sort === sortButton
      ? 'sortBtn btnShadow active'
      : 'sortBtn btnShadow'
  }

  return (<section className='SecSearch'>
    <input
      className="searchBar" onInput={(e)=>props.searchChange(applyFilter(e.target.value.toLowerCase()))} type="text" id="searchBar" placeholder="Search"/>
    <div className="sortBar">
      <label className="sortByText"><h3>Sort by</h3></label>
      {/* onClick={applySort(props.sortChange(props.state.filteredData))} */}
      <label className={active("rank")} onClick={()=>props.sortChange(applySort(props.state.filteredData, 'rank'))}>
        Rank
      </label>
      <label className={active("name")} onClick={()=>props.sortChange(applySort(props.state.filteredData, 'name'))}>
        Name
      </label>
      <label className={active("price_usd")} onClick={()=>props.sortChange(applySort(props.state.filteredData, 'price_usd'))}>
        Price
      </label>
      <label className={active("percent_change_24h")} onClick={()=>props.sortChange(applySort(props.state.filteredData, 'percent_change_24h'))}>
        Change
      </label>
      <div>
        <SortOrderBtn ascending={props.state.ascending} ascendingChange={props.ascendingChange}/>
        {/* <select onChange={(e)=> console.log('NUMBER CHANGE', e.target.value)}> */}

      </div>
      <div className="showingResults">
        Showing {props.state.resultsShowing} of {props.state.numberOfResults} results
      </div>
      <div>
        <div>Display results</div>
        <select onChange={(e)=> props.resultsToShowChange(e.target.value)}>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={100}>100</option>
        </select>
      </div>
    </div>
  </section>)
}


export default SecSearch;