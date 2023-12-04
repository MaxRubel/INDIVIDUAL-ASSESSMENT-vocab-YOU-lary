import addCardForm from '../components/forms/addCard';
import { showCards } from '../pages/cards';
import {
  getCards, deleteCard, getSingleCard, updateCard
} from '../api/cardsData';
import updateCardForm from '../components/forms/updateCard';

const domEvents = () => {
  document.getElementById('addCardButton').addEventListener('click', addCardForm);

  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR CREATING AN UPDATE FORM
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then(updateCardForm);
    }

    // CLICK EVENT FOR DELETING A CARD
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards().then(showCards);
        });
      }
    }
    if (e.target.id.includes('updateCardButton')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        firebaseKey
      };

      updateCard(payload)
        .then(getCards)
        .then(showCards);
    }
  });
};

export default domEvents;
