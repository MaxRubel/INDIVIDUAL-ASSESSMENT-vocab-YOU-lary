import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getCards } from '../api/cardsData';
import { showCards } from '../pages/cards';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  getCards(user).then(showCards);
  console.warn(user.uid);
};

export default startApp;
