import addCardForm from '../components/forms/addCard';
import { getCards } from '../api/cardsData';
import { showCards } from '../pages/cards';

const navigationEvents = () => {
  document.getElementById('addCard').addEventListener('click', addCardForm);
  document.getElementById('homeButton').addEventListener('click', () => {
    getCards().then(showCards);
  });
};
export default navigationEvents;
