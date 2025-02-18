// username or email input
// password input

import { loginUser } from "../api/loginMethod.js";
import { AUTH_URL, TOKEN_NAME } from "../constants/constans.js";

export const loginView = () => {
  const template = /*html*/ `
        <section class="login">
            <div class="container">
                <form action=${AUTH_URL}>
                    <h2 class="title">Login</h2>
                    <input type="text" name="username" placeholder="username or email">
                    <input type="password" name="password" class="password" placeholder="password">

                    <p class="error"></p>

                    <button class="submit-btn">submit</button>
                </form>
            </div>
        </section>
    `;

  const element = document.createRange().createContextualFragment(template);
  submitForm(element.querySelector("form"));

  return element;
};

const submitForm = (formElement) => {
  const credantials = {};

  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    credantials.username = formElement.querySelector(
      "input[name='username']"
    ).value;
    credantials.password = formElement.querySelector(
      "input[name='password']"
    ).value;

    const res = await loginUser(credantials);
    if (res.success) {
      localStorage.setItem(TOKEN_NAME, res.token);
      history.pushState(null, null, "/");
    } else {
      formElement.querySelector(".error").textContent = res.err;
    }
  });
};
