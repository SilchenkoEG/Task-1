import React, { Component } from "react";
import "./App.css";
import Categories from "./Category";
import {
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Col,
  Row
} from "react-bootstrap";
import Filters from "./Filter";
import Search from "./Search";
import ProductList from "./ProductList";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "",
      filterColor: ["black", "white"],
      searchPhrase: ""
    };
  }
  changeSearch = phrase => {
    this.setState({ searchPhrase: phrase });
  };

  showCategory = name => {
    this.setState({ activeCategory: name });
  };
  changeCheck = event => {
    if (event.target.checked) {
      const joined = this.state.filterColor.slice();
      joined.push(event.target.value);
      this.setState({ filterColor: joined });
    } else {
      const joined = this.state.filterColor.slice();
      joined.splice(joined.indexOf(event.target.value), 1);
      this.setState({ filterColor: joined });
    }
  };
  render() {
    return (
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <ListGroup>
            <ListGroupItem>
              <Form inline>
                <FormGroup controlId="formInlineName">
                  <Search
                    onChangeSearch={this.changeSearch}
                    value={this.state.searchPhrase}
                  />
                </FormGroup>{" "}
                <FormGroup className="searcGroup" controlId="formInlineEmail">
                  <Filters
                    onChangeCheck={this.changeCheck}
                    filterColor={this.state.filterColor}
                  />
                </FormGroup>{" "}
              </Form>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={6} md={4}>
          <Categories showCategory={this.showCategory} />
        </Col>
        <Col xsHidden md={4}>
          <ProductList
            data={
              this.state.activeCategory &&
              data
                .filter(item => item.name === this.state.activeCategory)
                .map(item => item.children)
                .reduce((reducer, item) => reducer.concat(item))
                .filter(product =>
                  this.state.filterColor.includes(product.color)
                )
                .filter(
                  item =>
                    item.title
                      .toLowerCase()
                      .indexOf(this.state.searchPhrase) !== -1
                )
            }
          />
        </Col>
      </Row>
    );
  }
}

export default App;
