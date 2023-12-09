import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import backButton from '../shared/showCardsButton';
import selectLanguage from './selectLanguage';

const addCardForm = (user) => {
  clearDom();
  const domString = `<div id="showCards"><button id="showCards" type="button" class="btn btn-light">Show Cards</button></div>
  </div>
  <form id="submitCard">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <input type="text" class="form-control" id="title" placeholder="Title" required>
  <div id="selectLanguage"></div>
   <textarea class="form-control" id="definition" required placeholder="Definition"></textarea>
   <label for="private">Keep Private?</label>
    <input type="checkbox" id="private" value="private?" />
    <div id="submitButton"><button type="submit" id="submitButton" class="btn btn-primary mt-3">Add Card</button></div>
    <div id="submitted">  
   </div>
  </div>
  </form>
</div>`;
  renderToDom('#form-container', domString);
  selectLanguage(user, '');
  backButton(user);
};

export default addCardForm;
