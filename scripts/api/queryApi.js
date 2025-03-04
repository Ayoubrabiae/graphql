import { GRAPHQL_URL } from "../constants/constans.js";

export const fetchData = async (token, query) => {
  try {
    const resp = await fetch(GRAPHQL_URL, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      return { success: false, err: data.error };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, err };
  }
};
