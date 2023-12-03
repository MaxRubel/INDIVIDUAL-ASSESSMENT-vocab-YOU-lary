import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import { getCards } from '../../api/cardsData';
import { showCards } from '../../pages/cards';

const addCardForm = () => {
  clearDom();
  const domString = `
    <form id="submitCard" class="mb-4">
      <div class="form-group">
        <label for="title"></label>
        <input type="text" class="form-control" id="title" placeholder="title" required>
      </div>
      <div class="form-group">
        <label for="definition"></label>
        <input type="text" class="form-control" id="definition" placeholder="definition" required>
      </div>
      <div class="form-group">
        <label for="language"></label>
        <input type="text" class="form-control" id="language"  placeholder="language" required>
      </div>
      <div class="form-group">
      <label for="private">Keep Private?</label>
      <input type="checkbox" id="private" value="private?" />
    </div>
      <button type="submit" class="btn btn-primary mt-3">Add Card</button>
      <div id="submitted"></div>
    </form>
    <div id="showCards"><button id="showCards" type="button" class="btn btn-light">Show Cards</button></div>
    `;
  renderToDom('#form-container', domString);
  document.querySelector('#showCards').addEventListener('click', () => {
    getCards().then(showCards);
  });
};

export default addCardForm;
