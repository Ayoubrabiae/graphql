export const addPushStateEvent = () => {
  // Save the original pushState method
  const originalPushState = history.pushState;

  // Create a custom pushState function
  history.pushState = function (state, title, url) {
    // Call the original pushState method
    originalPushState.apply(this, arguments);

    // Dispatch a custom event or perform any action when pushState is called
    const event = new CustomEvent("historyPushState", {
      detail: { state, title, url },
    });
    window.dispatchEvent(event);
  };
};
