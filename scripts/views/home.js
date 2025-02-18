// Place holder to enter the query
// Place to show the result

export const homeView = () => {
  const template = /*html*/ `
        <section class="home">
            <div class="container">
                <textarea class="query-input" placeholder="Enter your query here please"></textarea>
                <div class="result">
                </div>
            </div>
        </section>
    `;

  return document.createRange().createContextualFragment(template);
};
