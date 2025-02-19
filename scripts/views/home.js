import { fetchData } from "../api/queryApi.js";
import { basicInfo } from "../components/basicInfo.js";
import { TOKEN_NAME } from "../constants/constans.js";
import { query } from "../constants/queries.js";

export const homeView = async () => {
  const { data } = await fetchData(localStorage.getItem(TOKEN_NAME), query);
  console.log(data);
  const basicInfoObj = {
    login: data.data.user[0].login,
    firstName: data.data.user[0].attrs.firstName,
    lastName: data.data.user[0].attrs.lastName,
    email: data.data.user[0].attrs.email,
    city: data.data.user[0].attrs.city,
    country: data.data.user[0].attrs.country,
    level: data.data.level.aggregate.max.amount,
    audit: data.data.user[0].auditRatio,
  };
  const template = /*html*/ `
        <section class="home">
          <div class="logout-btn">
            <!-- <img src="/images/logout.svg" alt="logout-icon" width="20"> -->
             Logout
          </div>
            <div class="container">
            ${basicInfo(basicInfoObj)}

            <div class="charts">
              <div class="skills chart">
                <svg id="skillsChart" width="400" height="400"></svg>
              </div>
              <div class="lastProjects chart">
                <svg id="projectsChart"  width="500" height="350"></svg>
              </div>
            </div>

            </div>
        </section>
    `;

  const element = document.createRange().createContextualFragment(template);

  return element;
};
