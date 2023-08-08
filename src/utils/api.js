import Axios from "axios";
//Endpoints
export const BASE_URL = "baseurl";
export const SITE_DOMAIN = "domain";
export const IMAGE_URL = "baseimage";
export const appsApi = Axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const apiErrorHandler = (error) => {
  const { response } = error;
  console.error(error);
  if (response && response.data) {
    if (response.data.Message) {
      console.error(response.data.Message);
    }
    if (response.data.message) {
      console.error(response.data.message);
    }
  }
};
