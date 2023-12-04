import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import backButton from '../shared/backButton';

const updateCardForm = (card) => {
  clearDom();
  const domString = `
  <form id="updateCard">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <input type="text" class="form-control" id="title" value="${card.title}" required>
   <input type="text" class="form-control" id="language"  value="${card.language}" required>
   <input type="text" class="form-control" id="definition" value="${card.definition}" required>
   <label for="private">Keep Private?</label>
    <input type="checkbox" id="private" value="private?" />
    <div><a href="#" id="updateCardButton--${card.firebaseKey}" class="card-link">Update Card</a>
    <a href="#" id="delete-card--${card.firebaseKey}" class="card-link">Delete Card</a></div>
  </div>
  </form>
  <div id="showCards"><button id="showCards" type="button" class="btn btn-light">Show Cards</button></div>
</div>`;
  renderToDom('#cards', domString);
  backButton();
  // document.querySelector('#main-container').addEventListener('click', (e) => {
  //   // if (e.target.id.includes('updateCardButton')) {
  //   //   console.warn('update-card-button');
  //   // }
  // });
};

export default updateCardForm;
