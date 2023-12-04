import { getCards } from '../api/cardsData';
import { showCards } from '../pages/cards';
import addCardForm from '../components/forms/addCard';

const navigationEvents = (user) => {
  document.getElementById('homeButton').addEventListener('click', () => {
    getCards(user).then(showCards);
  });
  document.getElementById('addCard').addEventListener('click', () => {
    addCardForm(user);
  });
};
export default navigationEvents;
