import addCardForm from '../components/forms/addCard';
import { showCards } from '../pages/cards';
import {
  getCards, deleteCard, getSingleCard, updateCard,
} from '../api/cardsData';
import updateCardForm from '../components/forms/updateCard';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // ADD CARD BUTTON PRESS
    if (e.target.id.includes('addACard')) {
      addCardForm(user);
    }
    // CREATE UPDATE CARD FORM
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((data) => { updateCardForm(data, user); });
    }
    // UPDATE CARD
    if (e.target.id.includes('updateCardButton')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
        firebaseKey
      };

      updateCard(payload)
        .then(getCards)
        .then(showCards);
    }
    // DELETE CARD
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(() => {
          getCards(user).then(showCards);
        });
      }
    }
  });
};

export default domEvents;
