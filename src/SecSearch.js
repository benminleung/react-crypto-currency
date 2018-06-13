import React from 'react';

const SecSearch = (props) => {

  const applySort = (data, sort) => {
    switch (sort) {
      case 'rank':
      case 'price_usd':
      case 'percent_change_24h':
        return data.slice().sort((a,b) => {
          return a[sort] - b[sort];
        });
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
        return sortedData;
        break;
    } 
  }

  // filters the results to the input and returns an array
  const applyFilter = (searchValue) => {
    // console.log(searchValue);
    
    return {

      data: props.state.data,

      filteredData: props.state.data.filter((item) => {
          return item.name.toLowerCase().includes(searchValue);
        }),

      sort: props.state.sort,

      search: searchValue
    }
  }
  
  const active = (sortButton) => {
    // console.log(props.sort)
    return props.state.sort === sortButton
      ? 'sortBtn btnShadow active'
      : 'sortBtn btnShadow'
  }


  return (<section className='SecSearch'>
    <input
      className="searchBar" onInput={(e)=>props.searchChange(applyFilter(e.target.value.toLowerCase()))} type="text" id="searchBar" placeholder="Search"/>
    <div className="sortBar" id="sortBar">
      <div>Sort by</div>
      {/* onClick={applySort(props.sortChange(props.state.filteredData))} */}
      <label className={active("rank")} onClick={()=>props.sortChange(applySort(props.state.filteredData, 'rank'), 'rank')}>
        Rank
      </label>
      <label className={active("name")} onClick={()=>props.sortChange(applySort(props.state.filteredData, 'name'), 'name')}>
        Name
      </label>
      <label className={active("price_usd")} onClick={()=>props.sortChange(applySort(props.state.filteredData, 'price_usd'), 'price_usd')}>
        Price
      </label>
      <label className={active("percent_change_24h")} onClick={()=>props.sortChange(applySort(props.state.filteredData, 'percent_change_24h'), 'percent_change_24h')}>
        Change
      </label>
    </div>
  </section>)
}


export default SecSearch;