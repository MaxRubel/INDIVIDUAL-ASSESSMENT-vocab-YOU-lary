// import { getCards } from '../api/cardsData';
import submitSuccess from '../utils/submitSuccess';
import timeSubmitted from '../utils/timeSubmitted';
import { showCards } from '../pages/cards';
import {
  updateAndFormat,
  patchAllCardsbyLang,
  addAndFormat
} from '../api/mergedData';
import { getCards } from '../api/cardsData';
import {
  getLangs, updateLanguage, createLanguage,
  grabSingleLanguage
} from '../api/languageData';
import showLanguages from '../pages/languages';
import clearDom from '../utils/clearDom';
import selectLanguage from '../components/forms/selectLanguage';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // SUBMIT/CREATE CARD
    if (e.target.id.includes('submitCard')) {
      const payload = {
        title: document.getElementById('title').value,
        definition: document.getElementById('definition').value,
        language: document.getElementById('languageSelect').value,
        timeSubmitted: timeSubmitted(),
        private: document.getElementById('private').checked,
        uid: user.uid
      };
      grabSingleLanguage(payload.language).then((data) => {
        if (data.length > 0) {
          addAndFormat(payload).then();
          document.getElementById('submitCard').reset();
          submitSuccess();
          selectLanguage(user, '');
        } else {
          createLanguage(
            {
              language: payload.language,
              private: payload.private,
              uid: user.uid
            }
          ).then(({ name }) => {
            const patchPayload = { firebaseKey: name };
            updateLanguage(patchPayload).then(() => {
              addAndFormat(payload).then();
              document.getElementById('submitCard').reset();
              submitSuccess();
              selectLanguage(user, '');
            });
          });
        }
      });
    }

    // SUBMIT LANGUAGE
    if (e.target.id.includes('submitLang')) {
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

    // UPDATE CARD
    if (e.target.id.includes('updateCard')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        language: document.getElementById('languageSelect').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
        firebaseKey
      };
      grabSingleLanguage(payload.language).then((data) => {
        if (data.length > 0) {
          updateAndFormat(payload).then(() => {
            getCards(user).then(showCards);
          });
        } else {
          createLanguage({
            language: payload.language,
            private: payload.private,
            uid: user.uid
          })
            .then(({ name }) => {
              const patchPayload = { firebaseKey: name };
              updateLanguage(patchPayload).then(() => {
                updateAndFormat(payload).then(() => {
                  getCards(user).then(showCards);
                });
              });
            });
        }
      });
    }

    // UPDATE LANGUAGE
    if (e.target.id.includes('languageEdit')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        language: document.getElementById('updateLangValue').value,
        firebaseKey
      };
      patchAllCardsbyLang(payload).then();
      updateLanguage(payload).then(() => {
        clearDom();
        getLangs(user).then(showLanguages);
      });
    }
  });
};
export default formEvents;
