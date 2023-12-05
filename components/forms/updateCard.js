import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import backButton from '../shared/backButton';

const updateCardForm = (card, user) => {
  clearDom();
  const domString = `
  <div id="showCards"><button id="showCards" type="button" class="btn btn-light">Show Cards</button></div>
  </div>
  <form id="updateCard">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <input type="text" class="form-control" id="title" value="${card.title}" required>
   <input type="text" class="form-control" id="language"  value="${card.language}" required>
   <textarea class="form-control" id="definition" required>${card.definition}</textarea>
   <label for="private">Keep Private?</label>
    <input type="checkbox" id="private" value="private?" />
    <div><a href="#" id="updateCardButton--${card.firebaseKey}" class="card-link">Update Card</a>
    <a href="#" id="delete-card--${card.firebaseKey}" class="card-linkRed">Delete Card</a></div>
  </div>
  </form>`;
  renderToDom('#form-container', domString);
  backButton(user);
};

export default updateCardForm;
