import {
  BASE,
  SERVER_KEY,
  BASIC_AUTH_USERNAME,
  BASIC_AUTH_PASSWORD,
} from "./constant";
import axios from "axios";

const post = async (endpoint, body, auth) => {
  const URL = BASE + endpoint;
  return new Promise((resolve, reject) => {
    axios
      .post(URL, body, {
        headers: {
          "Content-Type": "Application/json",
          SERVER_KEY: SERVER_KEY,
          Authorization: `Basic ${btoa(
            BASIC_AUTH_USERNAME + ":" + BASIC_AUTH_PASSWORD
          )}`,
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export default { post };
