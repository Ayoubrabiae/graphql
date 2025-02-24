import { fetchData } from "../api/queryApi.js";
import { barGraph } from "../components/barGraph.js";
import { basicInfo } from "../components/basicInfo.js";
import { circularProgressGraph } from "../components/circularGraph.js";
import { TOKEN_NAME } from "../constants/constans.js";
import { getModuleIdQuery, query } from "../constants/queries.js";
import {
  extractProjects,
  logoutFuncitonality,
  makeSkillsUnique,
} from "../helpers/helpers.js";

export const homeView = async () => {
  let moduleIdData = await fetchData(
    localStorage.getItem(TOKEN_NAME),
    getModuleIdQuery
  );
  if (
    moduleIdData.data.errors &&
    moduleIdData.data.errors[0].extensions.code === "invalid-jwt"
  ) {
    localStorage.removeItem(TOKEN_NAME);
    history.pushState(null, null, "/");
    return;
  }
  moduleIdData = moduleIdData.data.data.user[0].events.filter(
    (e) => e.event.object.type == "module"
  );
  const { data } = await fetchData(
    localStorage.getItem(TOKEN_NAME),
    query(moduleIdData[0].eventId)
  );

  // make skills unique and take top 5 skills
  const skills = makeSkillsUnique(data.data.skills);
  const projects = extractProjects(data.data.xpPeerProjects);

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
             Logout
          </div>
            <div class="container">
            ${basicInfo(basicInfoObj)}

            <div class="charts">
              <div class="skills chart">
                <h2 class="title">Skills</h2>
                <svg id="skillsChart" width="400" height="420"></svg>
              </div>
              <div class="lastProjects chart">
              <h2 class="title">Last Projects</h2>
                <svg id="projectsChart"  width="500" height="450"></svg>
              </div>
            </div>

            </div>
        </section>
    `;

  const element = document.createRange().createContextualFragment(template);

  circularProgressGraph(
    Object.keys(skills).map((e) => e.replace("skill_", "").toUpperCase()),
    Object.values(skills),
    element.getElementById("skillsChart")
  );

  barGraph(projects, element.getElementById("projectsChart"));

  logoutFuncitonality(element.querySelector(".logout-btn"));

  return element;
};
