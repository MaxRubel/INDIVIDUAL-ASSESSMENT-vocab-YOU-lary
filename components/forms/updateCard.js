import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import backButton from '../shared/showCardsButton';
import selectLanguage from './selectLanguage';

const updateCardForm = (obj = {}, user) => {
  clearDom();
  const domString = ` <div id="showCards"><button id="showCards" type="button" class="btn btn-light">Show Cards</button></div>
  </div>
  <form id="updateCard">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <input type="text" class="form-control" id="title" value="${obj.title}" required>
  <div id="selectLanguage"></div>
   <textarea class="form-control" id="definition" required>${obj.definition}</textarea>
   <label for="private">Keep Private?</label>
    <input type="checkbox" id="private" value="private?" />
    <div><a href="#" id="updateCardButton--${obj.firebaseKey}" class="card-link">Update Card</a>
    <a href="#" id="delete-card--${obj.firebaseKey}" class="card-linkRed">Delete Card</a></div>
  </div>
  </form>`;
  renderToDom('#form-container', domString);
  backButton(user);
  selectLanguage(user, `${obj.lang_id || ''}`);
};

export default updateCardForm;
