import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const updateLangForm = (array, firebaseKey) => {
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
    if (lang.firebaseKey === firebaseKey) {
      domString += `<li class="list-group-item"><input type="text" class="form-control" id="updateLangValue" value="${lang.language}" required>
      <div class="crudLang">
        <a href="#" id="update-lang--${lang.firebaseKey}" class="card-link">Edit</a>
        <a href="#" id="updateButtonLang--${lang.firebaseKey}" class="updateLang">Submit</a>
    </li>
      </div>`;
    } else if (lang.firebaseKey !== firebaseKey) {
      domString += `
    <li class="list-group-item">${lang.language}
      <div class="crudLang">
        <a href="#" id="update-lang--${lang.firebaseKey}" class="card-link">Edit</a>
        <a href="#" id="delete-lang--${lang.firebaseKey}" class="deleteLang">Delete</a>
    </li>
      </div>`;
    }
  });
  renderToDom('#langaugeList', domString);
};

export default updateLangForm;
