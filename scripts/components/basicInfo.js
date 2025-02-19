export const basicInfo = ({
  login,
  firstName,
  lastName,
  city,
  country,
  email,
  audit,
  level,
}) => /*html*/ `
    <div class="basic-info">
        <div class="row row-1">
            <div class="col name">
            <span class="label username">${login}</span>
            <p class="value full-name">${firstName} ${lastName}</p>
            </div>
        </div>
        <div class="row row-2">
            <div class="col">
            <span class="label">city</span>
            <p class="value city">${city}</p>
            </div>
            <div class="col">
            <span class="label">eamil</span>
            <p class="value email">${email}</p>
            </div>
            <div class="col">
            <span class="label">country</span>
            <p class="value country">${country}</p>
            </div>
        </div>
        <div class="row row-3">
        <div class="col">
            <span class="label">Audit</span>
            <p class="value audit">Ratio: ${audit.toFixed(2)}</p>
            </div>
            <div class="col">
            <span class="label">level</span>
            <p class="value level">Level: ${level}</p>
            </div>
        </div>
    </div>
`;
