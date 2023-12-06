import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
// import { getLangs } from '../api/languageData';

const showLanguages = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="addALanguage">Add A Language</button>';
  renderToDom('#addCardButton', btnString);
  let domString = '';
  array.forEach((item) => {
    domString += `<div id="${item.firebaseKey}">${item.language}</div>`;
  });
  renderToDom('#languages', domString);
};
export default showLanguages;
