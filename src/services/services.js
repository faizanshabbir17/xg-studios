import axios from "axios";

const API_URL = "base url goes here ";
const apiCall = () => {
  return axios.get(API_URL + "Params", {}).then((response) => {
    return response;
  });
};

// export api call end

const serviceObj = {
  apiCall,
};

export default serviceObj;
