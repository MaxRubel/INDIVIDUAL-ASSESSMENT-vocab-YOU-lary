import { getCards } from '../../api/cardsData';
import { showCards } from '../../pages/cards';

const backButton = () => {
  document.querySelector('#showCards').addEventListener('click', () => {
    getCards().then(showCards);
  });
};

export default backButton;
