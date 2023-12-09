import renderToDom from '../../utils/renderToDom';
import { getLangs } from '../../api/languageData';

const selectLanguage = (user, langId) => {
  let domString = '';
  const createDropDownBar = () => {
    domString = `
  <select class="form-control" id="languageSelect" required>
  <option value="">Select a language</option>
  <option value="createNewLang">Create New Language</option>`;

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
  createDropDownBar();

  // EVENT LISTENER TO CREATE TEXTBOX TO WRITE IN LANGUAGE
  document.getElementById('form-container').addEventListener('click', (e) => {
    if (e.target.id === 'languageSelect') {
      if (document.getElementById('languageSelect').value === 'createNewLang') {
        domString = `
      <input type="text" class="form-control" id="languageSelect" placeholder="" required></input>`;
        renderToDom('#selectLanguage', domString);
      }
    }
  });

  // EVENT LISTENER TO GO BACK TO SELECT
  document.getElementById('form-container').addEventListener('keyup', (e) => {
    if (e.target.id === 'languageSelect') {
      if (e.key === 'Backspace' && document.getElementById('languageSelect').value.length === 0) {
        createDropDownBar();
      }
    }
  });
};

export default selectLanguage;
