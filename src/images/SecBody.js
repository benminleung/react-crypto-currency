import React, { Component } from "react";

class SecBody extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    printData(item, i) {
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
        const change = item.percent_change_24h;


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
        <p className="value">{change}%</p>
      </div>);
  }

  render() {
    const data = this.props.data;

    return (
      <section className="SecBody">
            <div className="mainContent">
                {/* {console.log(this.props.data)} */}
                {data.map(this.printData)}
            </div>
      </section>
    );
  }
}

export default SecBody;
