import { TOKEN_NAME } from "../constants/constans.js";

// make skills unique and take top 5 skills
export const makeSkillsUnique = (allSkills) => {
  const skills = {};
  allSkills.forEach(({ type, amount }) => {
    if (!skills[type] && Object.keys(skills).length === 5) {
      let minSkillKey;
      let minSkillValue = amount;
      for (const skill in skills) {
        if (skills[skill] < minSkillValue) {
          minSkillValue = skills[skill];
          minSkillKey = skill;
        }
      }

      if (amount > skills[minSkillKey]) {
        skills[type] = amount;
        delete skills[minSkillKey];
      }
    } else if (!skills[type] || skills[type] < amount) {
      skills[type] = amount;
    }
  });

  return skills;
};

// extract projects with xp
export const extractProjects = (data) => {
  return data[0].transactions.map(({ object, amount }) => ({
    project: object.name,
    xp: amount / 1000,
  }));
};

// Logout Functionality
export const logoutFuncitonality = (logoutBtn) => {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem(TOKEN_NAME);
    history.pushState(null, null, "/");
  });
};
