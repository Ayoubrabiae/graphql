import { addPushStateEvent } from "./helpers/customEvents.js";
import { router } from "./views/routes.js";

// Add "historyPushState" event to the window
addPushStateEvent();

router();
window.addEventListener("historyPushState", console.log("Hello"));
