// check if the user authantecated
// if not call the login page
// else call the home page if an error occured redirect the user to the login page
// if not call the home page

import { APP_ELEMENT_CLASS, TOKEN_NAME } from "../constants/constans.js";
import { homeView } from "./home.js";
import { loginView } from "./login.js";

export const router = async () => {
  const jwt = localStorage.getItem(TOKEN_NAME);
  const appElement = document.querySelector(APP_ELEMENT_CLASS);
  appElement.innerHTML = "";
  if (jwt) {
    appElement.append(await homeView());
  } else {
    appElement.append(loginView());
  }
};
