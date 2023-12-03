import addCardForm from '../components/forms/addCard';

const domEvents = () => {
  document.getElementById('addCardButton').addEventListener('click', addCardForm);
};

export default domEvents;
