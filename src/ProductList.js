import React, { Component } from "react";
import Product from "./Product";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class ProductList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.data &&
          this.props.data.map(item => (
            <ListGroupItem bsStyle="warning" key={item.title}>
              <Product
                
                title={item.title}
                price={item.price}
                color={item.color}
              />
            </ListGroupItem>
          ))}
      </ListGroup>
    );
  }
}

export default ProductList;
