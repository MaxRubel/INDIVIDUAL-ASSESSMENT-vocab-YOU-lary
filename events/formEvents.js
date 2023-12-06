import { addCard, updateCard, getCards } from '../api/cardsData';
import submitSuccess from '../utils/submitSuccess';
import timeSubmitted from '../utils/timeSubmitted';
import { showCards } from '../pages/cards';
import { createLanguage, updateLanguage, grabLanguageKey } from '../api/languageData';

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
      updateCard(payload)
        .then(getCards)
        .then(showCards);
    }
  });

  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // SUBMIT CARD
    if (e.target.id.includes('submitCard')) {
      const payload = {
        title: document.getElementById('title').value,
        definition: document.getElementById('definition').value,
        language: document.getElementById('language').value,
        timeSubmitted: timeSubmitted(),
        private: document.getElementById('private').checked,
        uid: user.uid
      };
      const addAndFormat = () => new Promise((resolve, reject) => {
        grabLanguageKey(payload.language).then((data) => {
          const langKey = { lang_id: data[0].firebaseKey };
          addCard(payload).then(({ name }) => {
            const firebaseKey = { firebaseKey: name };
            const patchPayload = { ...firebaseKey, ...langKey };
            console.warn(patchPayload);
            updateCard(patchPayload).then(resolve);
          }).catch(reject);
        });
      });
      addAndFormat().then(() => {});
      document.getElementById('submitCard').reset();
      submitSuccess();
    }
    // SUBMIT LANGUAGE
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

    // UPDATE CARD EVENT;
  });
};

export default formEvents;

// addCard(payload).then(({ name }) => {
//   const patchPayload = { firebaseKey: name };
//   updateCard(patchPayload).then(() => {
//   });
// });
