// import { getCards } from '../api/cardsData';
import submitSuccess from '../utils/submitSuccess';
import timeSubmitted from '../utils/timeSubmitted';
// import { showCards } from '../pages/cards';
// import { createLanguage, updateLanguage } from '../api/languageData';
import { addAndFormat, updateAndFormat } from '../api/mergedData';
import { showCards } from '../pages/cards';
import { getCards } from '../api/cardsData';

const formEvents = (user) => {
  // UPDATE CARD
  document.addEventListener('click', (e) => {
    if (e.target.id.includes('updateCardButton')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
        firebaseKey
      };
      updateAndFormat(payload).then(() => { getCards(user).then(showCards); });
    }
  });

  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // SUBMIT/CREATE CARD
    if (e.target.id.includes('submitCard')) {
      const payload = {
        title: document.getElementById('title').value,
        definition: document.getElementById('definition').value,
        language: document.getElementById('language').value,
        timeSubmitted: timeSubmitted(),
        private: document.getElementById('private').checked,
        uid: user.uid
      };
      addAndFormat(payload).then(() => {});
      document.getElementById('submitCard').reset();
      submitSuccess();
    }
    // SUBMIT/CREATE LANGUAGE
    // if (e.target.id.includes('submitLangButton')) {
    //   const payload = {
    //     language: document.querySelector('#language').value,
    //     private: document.getElementById('private').checked,
    //     uid: user.uid
    //   };
    //   createLanguage(payload).then(({ name }) => {
    //     const patchPayload = { firebaseKey: name };
    //     updateLanguage(patchPayload).then(() => {
    //     });
    //   });
    //   document.getElementById('submitCard').reset();
    //   submitSuccess();
    // }
  });
};

export default formEvents;

// addCard(payload).then(({ name }) => {
//   const patchPayload = { firebaseKey: name };
//   updateCard(patchPayload).then(() => {
//   });
// });
