// import { getCards } from '../api/cardsData';
import submitSuccess from '../utils/submitSuccess';
import timeSubmitted from '../utils/timeSubmitted';
import { showCards } from '../pages/cards';
import {
  updateAndFormat, addAndFormat, patchAllCardsbyLang
} from '../api/mergedData';
// import { showCards } from '../pages/cards';
import { getCards } from '../api/cardsData';
import { getLangs, updateLanguage, createLanguage } from '../api/languageData';
import showLanguages from '../pages/languages';
import clearDom from '../utils/clearDom';

const formEvents = (user) => {
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
      addAndFormat(payload).then();
      document.getElementById('submitCard').reset();
      submitSuccess();
    }

    // SUBMIT LANGUAGE
    if (e.target.id.includes('submitLang')) {
      console.warn('clicked this button');
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
      document.getElementById('submitLang').reset();
      submitSuccess();
    }

    // UPDATE LANGUAGE
    if (e.target.id.includes('languageEdit')) {
      e.preventDefault();
      console.warn('form submitted');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        language: document.getElementById('updateLangValue').value,
        firebaseKey
      };
      patchAllCardsbyLang(payload);
      updateLanguage(payload).then(() => {
        clearDom();
        getLangs(user).then(showLanguages);
      });
    }
  });

  // UPDATE CARD
  document.querySelector('#form-container').addEventListener('click', (e) => {
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
};
export default formEvents;
