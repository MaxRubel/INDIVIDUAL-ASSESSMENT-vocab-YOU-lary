import {
  getCards, addCard, updateCard, getCardLanguages
} from './cardsData';
import { getLangs, grabLanguageKey } from './languageData';

// GET CARD AND LANGUAGE DETAILS -- MERGE
const getAllDetails = (user) => new Promise((resolve, reject) => {
  getCards(user).then((cardArray) => {
    getLangs(user).then((languageArray) => {
      resolve({ cardArray, languageArray });
    }).catch(reject);
  });
});

// ADD LANG_ID TO CARD PAYLOAD THEN ADD CARD TO DATABASE
const addAndFormat = (payload) => new Promise((resolve, reject) => {
  grabLanguageKey(payload.language).then((data) => {
    const langKey = { lang_id: data[0].firebaseKey };
    addCard(payload).then(({ name }) => {
      const firebaseKey = { firebaseKey: name };
      const patchPayload = { ...firebaseKey, ...langKey };
      updateCard(patchPayload).then(resolve);
    }).catch(reject);
  });
});

// ADD LANG_ID TO CARD PAYLOAD THEN PATCH CARD ON DATABASE
const updateAndFormat = (payload) => new Promise((resolve, reject) => {
  grabLanguageKey(payload.language).then((data) => {
    const langKey = { lang_id: data[0].firebaseKey };
    const newPayload = { ...langKey, ...payload };

    updateCard(newPayload)
      .then(resolve)
      .catch(reject);
  });
});

// PATCH ALL CARDS POSESSING A SPECIFIC LANGUAGE
const patchAllCardsbyLang = (payload) => new Promise((resolve, reject) => {
  getCardLanguages(payload.firebaseKey).then((cards) => {
    cards.forEach((card) => {
      updateCard(
        {
          language: payload.language,
          firebaseKey: card.firebaseKey
        }
      );
    });
  }).then(resolve)
    .then(reject);
});

// DELETE LANGUAGES OFF CARDS THAT POSSESS THAT LANGUAGE
const deleteLangData = (firebaseKey) => new Promise((resolve, reject) => {
  getCardLanguages(firebaseKey).then((cards) => {
    cards.forEach((card) => {
      updateCard(
        {
          language: 'No Language Selected',
          lang_id: null,
          firebaseKey: card.firebaseKey
        }
      );
    });
  }).then(resolve)
    .then(reject);
});

export {
  addAndFormat,
  getAllDetails,
  updateAndFormat,
  patchAllCardsbyLang,
  getCardLanguages,
  deleteLangData
};
