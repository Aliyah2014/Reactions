import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ImageResults from "./ImageResults";
import API from "../utils/API";

function SearchResults() {

const [search, setImg] = useState("");
const [res, setRes] = useState([]);

// search results to start with
useEffect(() => searchUpsplash("emoji"), []);

// const for api
const searchUpsplash = query => {
    API.search(query)
        .then(response => setRes(response.data.data))
        .catch(error => console.log(error));
};

// const for handling results
const handleInputChange = event => {
    setImg(event.target.value);
};

// const for submitting search
const handleFormSubmit = event => {
    event.preventDefault();
    searchUpsplash(search);
};

  return (
    <div>
        <SearchBox
        search={search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
         />
        <ImageResults results={res} />
      
    </div>
  );
}

export default SearchResults;
