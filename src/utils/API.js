import axios from "axios";


const BASEURL = "https://hp-api.herokuapp.com/api/characters";

// Export an object with a "search" method that searches the HP-API for the passed query
export default {
  search: function() {
       return axios.get(BASEURL);
  }
};

