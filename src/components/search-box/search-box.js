import React from "react";
import './search-box.css'


export const SearchBox = (props) => {
  return (
    <input
      className="search"
      onChange={props.searchFunction}
      type="search"
      placeholder={props.placeholder}
    />
  );
};
