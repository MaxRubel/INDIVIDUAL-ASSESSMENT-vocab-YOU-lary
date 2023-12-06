import {
  getCards, deleteCard, getSingleCard,
} from '../api/cardsData';
import updateCardForm from '../components/forms/updateCard';
import addLanguageForm from '../components/forms/addALanguage';
import { createLanguage, updateLanguage } from '../api/languageData';
import submitSuccess from '../utils/submitSuccess';
import { showCards } from '../pages/cards';
import addCardForm from '../components/forms/addCard';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // ADD CARD BUTTON PRESS
    if (e.target.id.includes('addACard')) {
      addCardForm(user);
    }
    // ADD LANGUAGE BUTTON PRESS
    if (e.target.id.includes('addALanguage')) {
      addLanguageForm(user);
    }
    // CREATE UPDATE CARD FORM
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((data) => { updateCardForm(data, user); });
    }
    // // UPDATE CARD
    // if (e.target.id.includes('updateCardButton')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   const payload = {
    //     title: document.querySelector('#title').value,
    //     language: document.querySelector('#language').value,
    //     definition: document.querySelector('#definition').value,
    //     uid: user.uid,
    //     firebaseKey
    //   };
    //   updateCard(payload)
    //     .then(getCards)
    //     .then(showCards);
    // }
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
    // ADD A LANGUAGE
    if (e.target.id.includes('submitLangButton')) {
      const payload = {
        language: document.querySelector('#language').value,
        private: document.getElementById('private').checked,
        uid: user.uid
      };
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLanguage(patchPayload).then(() => {
        });
      });
      document.getElementById('submitCard').reset();
      submitSuccess();
    }
  });
};

export default domEvents;
