// Place holder to enter the query
// Place to show the result

export const homeView = () => {
  const template = /*html*/ `
        <section class="home">
            <div class="container">
              <div class="basic-info">
                <div class="row row-1">
                  <div class="col name">
                    <span class="username">arabya</span>
                    <p class="full-name">Ayoub Rabya</p>
                  </div>
                </div>
                <div class="row row-2">
                  <p class="col cohort">chort: c-1</p>
                  <p class="col level">Level: 25</p>
                  <p class="col xp">665xp</p>
                </div>
                <div class="row row-3">
                  <p class="col audit">0.9</p>
                </div>
              </div>
            </div>
        </section>
    `;

  const element = document.createRange().createContextualFragment(template);

  return element;
};
