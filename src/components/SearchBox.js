import React, { useState } from "react";
import axios from "axios";
import "./SearchBox.css";

function SearchBox() {
  const [image, setImage] = useState("");
  const clientId = "yQaVo2m8_O3PqSex9PVzUIfmbcx8MeRhqU1-7m7wQEY";
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = () => {
    console.log(image);
    const url =
      "https://api.unsplash.com/search/photos?page=1&per_page=5&query=" +
      image +
      "&client_id=" +
      clientId;

    axios.get(url).then((response) => {
      setResult(response.data.results);
    });
  };

  const handleDelete = (index) => {
    setResult((prevResult) => {
      const updatedResult = [...prevResult];
      updatedResult.splice(index, 1);
      return updatedResult;
    });
  };

  return (
    <div className="resultsContainer">
      <div className="input">
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="🔍"
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </div>
      <div className="result">
        {result.map((image, index) => (
          <div className="card" key={index}>
            <button onClick={() => handleDelete(index)} className="remove">X</button>
            <img src={image.urls.thumb} alt="unsplash images" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBox;

// TODO:
// limit results to 5?
// connect to draggable
