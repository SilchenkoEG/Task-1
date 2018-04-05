import React, { Component } from "react";
import { Bootstrap, FormGroup, Checkbox } from "react-bootstrap";

export default props => (
  <FormGroup>
      <Checkbox className='searcGroup'
        type="checkbox"
        value="black"
        checked={props.filterColor.includes("black")}
        onChange={ (e) =>  props.onChangeCheck(e)}
      />Black
      <Checkbox className='searcGroup'
        type="checkbox"
        value="white"
        checked={props.filterColor.includes("white")}
        onChange={ (e) =>  props.onChangeCheck(e)}
      />White
  </FormGroup>
);