import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Name;
