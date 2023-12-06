import renderToDom from '../../utils/renderToDom';
import { getLangs } from '../../api/languageData';

const selectLanguage = (user, langId) => {
  let domString = `
  <select class="form-control" id="language" required>
  <option value="">Select a language</option>`;

  getLangs(user).then((langArray) => {
    langArray.forEach((lang) => {
      domString += `
          <option 
            value="${lang.language}" 
            ${langId === lang.firebaseKey ? 'selected' : ''}>${lang.language}
          </option>`;
    });

    domString += '</select>';

    renderToDom('#selectLanguage', domString);
  });
};

export default selectLanguage;
