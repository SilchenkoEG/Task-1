import React, { Component } from "react";
import data from "./data.json";
import {ListGroup,ListGroupItem } from "react-bootstrap";

class Categories extends Component {
  render() {
    return (
        <ListGroup>
          {data.map(category => {
            return (
              <ListGroupItem bsStyle="success"
                key={category.name}
                onClick={() => this.props.showCategory(category.name)}
              >
                {category.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
    );
  }
}

export default Categories;
