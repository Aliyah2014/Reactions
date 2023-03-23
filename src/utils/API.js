import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos?page=1&per_page=5",
  headers: {
    Authorization: "Client-ID yQaVo2m8_O3PqSex9PVzUIfmbcx8MeRhqU1-7m7wQEY"
  }
});


