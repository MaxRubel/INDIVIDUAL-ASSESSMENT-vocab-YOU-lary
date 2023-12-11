import clearDom from './clearDom';
import backButton from '../components/shared/showCardsButton';
import renderToDom from './renderToDom';

const updateCardForm = (user, card) => {
  clearDom();
  const domString = `
  <form id="updateCard">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <input type="text" class="form-control" id="title" placeholder="${card.title}" required>
   <input type="text" class="form-control" id="language"  placeholder="${card.language}" required>
   <input type="text" class="form-control" id="definition" placeholder="${card.definition}" required>
   <label for="private">Keep Private?</label>
    <input type="checkbox" id="private" value="private?" />
    <div><a href="#" id="update-card--${card.firebaseKey}" class="card-link">Update Card</a>
    <a href="#" id="delete-card--${card.firebaseKey}" class="card-link">Delete Card</a></div>
  </div>
  </form>
  <div id="showCards"><button id="showCards" type="button" class="btn btn-light">Show Cards</button></div>
</div>`;
  renderToDom('#cards', domString);
  backButton(user);
};

export default updateCardForm;
