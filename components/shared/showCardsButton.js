import { getCards } from '../../api/cardsData';
import { showCards } from '../../pages/cards';
// import { showCards } from '../../pages/cards';
// import { showCards } from '../../pages/cards';

const backButton = (user) => {
  document.querySelector('#showCards').addEventListener('click', () => {
    getCards(user).then(showCards);
    console.warn('cards shown');
  });
};

export default backButton;
