// username or email input
// password input

import { AUTH_URL } from "../constants/constans.js";

export const loginView = () => {
  const template = /*html*/ `
        <section class="login">
            <div class="container">
                <form action=${AUTH_URL}>
                    <h2 class="title">Login</h2>
                    <input type="text" name="username" placeholder="username or email">
                    <input type="password" name="passwor" class="password" placeholder="password">

                    <button class="submit-btn">submit</button>
                </form>
            </div>
        </section>
    `;

  return document.createRange().createContextualFragment(template);
};
