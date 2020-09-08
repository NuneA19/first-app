import React from "react";

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: props.price };
  }
  changeCurrency = () => {
    let { price } = this.state;
       if (price[price.length - 1] === '$') {
      price = `${Number(price.slice(0, -1)) * 487} ֏`;
         this.setState({ price });
       } else {
        price = `${Number(price.slice(0, -1)) / 487} $`;
         this.setState({ price });  
    }
};
  render() {
    return <div>
      <span>{this.state.price}</span>
      <button onClick={this.changeCurrency}>Change the currency</button>
    </div>;
  }
}

export default Price;