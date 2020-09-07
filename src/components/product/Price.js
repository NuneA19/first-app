import React from "react";

class Price extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.price}</div>;
  }
}

export default Price;