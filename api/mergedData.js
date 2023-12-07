import { getCards, addCard, updateCard } from './cardsData';
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
    console.warn(newPayload);
    updateCard(newPayload)
      .then(resolve)
      .catch(reject);
  });
});

export { addAndFormat, getAllDetails, updateAndFormat };
