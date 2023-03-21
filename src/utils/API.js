import axios from 'axios';

const URL = "https://api.unsplash.com/search/photos?page=1&query=";
const USKey = "/&client_id=yQaVo2m8_O3PqSex9PVzUIfmbcx8MeRhqU1-7m7wQEY";

export default {
   search: function(query) {
        return axios.get(URL + query + USKey);
   }
};


