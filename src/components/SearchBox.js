import React from "react";
import axios from "axios";
import { useState } from "react";

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
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId;

    axios.get(url).then((response) => {
      setResult(response.data.results);
    });
  };

  return (
    <div>
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
        {result.map((image) => (
          <>
            <div className="card">
              <img src={image.urls.thumb} alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default SearchBox;
