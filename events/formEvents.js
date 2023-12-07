// import { getCards } from '../api/cardsData';
import submitSuccess from '../utils/submitSuccess';
import timeSubmitted from '../utils/timeSubmitted';
import { showCards } from '../pages/cards';
import {
  updateAndFormat, addAndFormat, patchAllCardsbyLang
} from '../api/mergedData';
// import { showCards } from '../pages/cards';
import { getCards } from '../api/cardsData';
import { getLangs, updateLanguage } from '../api/languageData';
import showLanguages from '../pages/languages';
import clearDom from '../utils/clearDom';

const formEvents = (user) => {
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

  // UPDATE LANGUAGE
  document.querySelector('#languages').addEventListener('click', (e) => {
    if (e.target.id.includes('updateButtonLang')) {
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
  });
};

export default formEvents;
