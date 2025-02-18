import { GRAPHQL_URL } from "../constants/constans";

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

    return { success: true, token };
  } catch (err) {
    return { success: false, err };
  }
};

// Skills
// Basic
// Audit Ratio Up Down
// Xp on time
// Xp on projects
// Level
