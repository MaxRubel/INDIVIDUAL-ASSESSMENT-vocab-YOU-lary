import {
  getCards, deleteCard, getSingleCard,
} from '../api/cardsData';
import updateCardForm from '../components/forms/updateCard';
import addLanguageForm from '../components/forms/addALanguage';
import {
  getLangs, deleteLangauge
} from '../api/languageData';
import { showCards } from '../pages/cards';
import addCardForm from '../components/forms/addCard';
import showLanguages from '../pages/languages';
import updateLangForm from '../components/forms/updateLangForm';
import { deleteLangData } from '../api/mergedData';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // RENDER ADD CARD FORM -- BUTTON CLICK
    if (e.target.id.includes('addACard')) {
      addCardForm(user);
    }
    // RENDER ADD LANGUAGE FORM -- BUTTON CLICK
    if (e.target.id.includes('addALanguage')) {
      addLanguageForm(user);
    }
    // RENDER UPDATE CARD FORM -- BUTTON CLICK
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((data) => { updateCardForm(data, user); });
    }
    // RENDER UPDATE LANGUAGE ENVIRONMENT
    if (e.target.id.includes('update-lang')) {
      const [, firebaseKey] = e.target.id.split('--');
      getLangs(user).then((langs) => {
        updateLangForm(langs, firebaseKey);
      });
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
    // DELETE LANGUAGE
    if (e.target.id.includes('delete-lang')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteLangauge(firebaseKey).then(() => {
          deleteLangData(firebaseKey);
          getLangs(user).then(showLanguages);
        });
      }
    }
  });
};

export default domEvents;
