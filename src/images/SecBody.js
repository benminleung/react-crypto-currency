import React from "react";

const SecBody = (props) => {

    const printData = (item, i) => {
        const supplyProcess = (num) => {
            let number = num;
            if (number > 1000000) {
                number = Math.round(number / 1000000);
                if (number > 1000){
                    return `${number.toString().slice(0,-3)},${number.toString().slice(-3)}M`
                }
                return `${number}M`;
            }
            return `${number}`;
        }
        
        const name = `${i+1}. ${item.name}`;
        const symbol = `(${item.symbol})`;
        const supply = supplyProcess(item.available_supply);
        const price = `$${item.price_usd}`;
        const rank = item.rank;

        const changeDiv = () => {
            const change = parseFloat(item.percent_change_24h);
            if (isNaN(change)) {
                return <p className="value">No Data</p>
            }
            return change === 0
                ? <p className="value">{change}%</p>
                : change < 0
                    ? <p className="value" style={{color: 'red'}}>&#9660;{change}%</p>
                    : <p className="value" style={{color: 'darkgreen'}}>&#9650;{change}%</p>
        }
                
        return (<div className="item btnShadow" key={i}>
            <h3 className="name">{name}</h3>
            <p className="symbol">{symbol}</p>
            <p className="key">Supply</p>
            <p className="value">{supply}</p>
            <p className="key">PriceUSD</p>
            <p className="value">{price}</p>
            <p className="key">Rank</p>
            <p className="value">{rank}</p>
            <p className="key">Change 7 days</p>
            {changeDiv()}
        </div>);
    }
    

    const dataReverseAndProcess = (data) => 
        props.state.ascending
        ? data.slice(0, props.state.resultsShowing)
        : data.slice().reverse().slice(0, props.state.resultsShowing);

    const showAllCondRender = () => 
        props.state.resultsShowing < props.state.numberOfResults
            && <label onClick={() => props.showAll()} className="showMoreBtn btnShadow"> &#9660; Show All {props.state.numberOfResults} results &#9660;</label>;

    return (
        <section className="SecBody">
            <div className="mainContent">
                {/* {console.log(this.props.data)} */}
                {dataReverseAndProcess(props.state.filteredData).map(printData)}
                {showAllCondRender()}
            </div>
        </section>
    );
}

export default SecBody;
