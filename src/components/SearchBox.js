import React, { useState } from 'react';
import "./SearchBox.css";

function SearchBox(props) {

  const [searchTerm, setsearchTerm] = useState("");

  // event handlers
  const onFormSubmit = (event) => {
    event.preventDefault(); // prevents page from refreshing itself
    props.onSubmit(searchTerm);
  };

  const onInputChange = (event) => {
    setsearchTerm(event.target.value);
  };

  return (
    <div className="SearchBar">
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Image Search: </label>
            <div className="ui icon input">
              <input type="text" value={searchTerm} onChange={onInputChange} placeholder="Search..." />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


export default SearchBox;
