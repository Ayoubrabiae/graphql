import { fetchData } from "./api/queryApi.js";
import { TOKEN_NAME } from "./constants/constans.js";
import { query } from "./constants/queries.js";
import { addPushStateEvent } from "./helpers/customEvents.js";
import { router } from "./views/routes.js";

// Add "historyPushState" event to the window
addPushStateEvent();

router();

window.addEventListener("historyPushState", () => {
  router();
});
