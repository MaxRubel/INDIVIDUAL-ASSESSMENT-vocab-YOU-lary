import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
// import { getLangs } from '../api/languageData';

const showLanguages = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="addALanguage">Add A Language</button>';
  renderToDom('#addCardButton', btnString);
  const cardLayout = `
    <div class="card" id="" style="width: 18rem;">
      <ul class="list-group list-group-flush" id="langaugeList">
      </ul>
    </div>`;
  renderToDom('#languages', cardLayout);
  let domString = '';
  array.forEach((lang) => {
    domString += `
    <li class="list-group-item-og">
    <div class="langTitle">${lang.language}
    </div>  
    <div class="crudLang">
        <a href="#" id="update-lang--${lang.firebaseKey}" class="card-link">Edit</a>
        <a href="#" id="delete-lang--${lang.firebaseKey}" class="deleteLang">Delete</a>
      </div>
      </li>`;
  });
  renderToDom('#langaugeList', domString);
};
export default showLanguages;
