import { getCards } from '../api/cardsData';
import { showCards } from '../pages/cards';
import addCardForm from '../components/forms/addCard';
import backButton from '../components/shared/backButton';

const navigationEvents = (user) => {
  document.getElementById('homeButton').addEventListener('click', () => {
    getCards(user).then(showCards);
  });
  document.getElementById('addCard').addEventListener('click', () => {
    addCardForm(user);
  });
  document.getElementById('alphabetize').addEventListener('click', () => {
    getCards(user)
      .then((cards) => {
        cards.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        showCards(cards);
      });
  });
  document.getElementById('langauge').addEventListener('click', () => {
    console.warn('language');
    getCards(user)
      .then((cards) => {
        cards.sort((a, b) => {
          if (a.language < b.language) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        showCards(cards);
      });
  });
  document.getElementById('dateSubmitted').addEventListener('click', () => {
    console.warn('dateSubmitted');
    getCards(user)
      .then(() => {
        console.warn('time submitted');
      });
  });

  // SEARCH FUNCTION
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
      getCards(user)
        .then((cards) => {
          const searchResult = cards.filter((card) => card.title.toLowerCase().includes(searchValue));
          showCards(searchResult);
          document.getElementById('addCardButton').innerHTML = '<div id="showCards"><button id="showCards" type="button" class="btn btn-light">Show Cards</button></div>';
          backButton(user);
        });
    }
  });
};
export default navigationEvents;
