import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <p key={this.props.title}>
          {this.props.title} {this.props.price} {this.props.color}
        </p>
      </div>
    );
  }
}

export default Product;
