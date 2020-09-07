import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Name name={this.props.name} />
        <Price price={this.props.price} />
        <Description description={this.props.description} />
      </div>
    );
  }
}

export default Product;
