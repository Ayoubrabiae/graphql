import { AUTH_URL } from "../constants/constans.js";

export const loginUser = async ({ username, password }) => {
  try {
    const resp = await fetch(AUTH_URL, {
      method: "post",
      headers: {
        Authorization: `Basic ${btoa(username + ":" + password)}`,
      },
    });

    const token = await resp.json();
    if (!resp.ok) {
      return { success: false, err: token.error };
    }

    return { success: true, token };
  } catch (err) {
    return { success: false, err };
  }
};
