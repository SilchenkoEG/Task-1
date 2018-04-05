import React from "react";

export default props => (
  <input
    type="text"
    value={props.value}
    onChange={e => props.onChangeSearch(e.target.value)}
  />
);
