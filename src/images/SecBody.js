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
        const name = item.name;
        const symbol = item.symbol;
        const supply = supplyProcess(item.available_supply);
        const price = item.price_usd;
        const rank = item.rank;
        const change = item.percent_change_24h;


    return (<div class="item btnShadow">
        <h3 class="name"> {i+1}. {name}</h3>
        <p class="symbol">({symbol})</p>
        <p class="key">Supply</p>
        <p class="value">{supply}</p>
        <p class="key">PriceUSD</p>
        <p class="value">${price}</p>
        <p class="key">Rank</p>
        <p class="value">{rank}</p>
        <p class="key">Change 7 days</p>
        <p class="value">{change}%</p>
      </div>);
  }

  render() {
    const data = this.props.data;

    return (
      <section className="SecBody">
        {console.log(this.props.data)}
        {data.map(this.printData)}
      </section>
    );
  }
}

export default SecBody;
