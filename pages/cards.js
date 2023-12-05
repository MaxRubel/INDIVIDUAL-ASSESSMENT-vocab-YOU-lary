import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDom('#cards', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="addACard">Add A Card</button>';
  renderToDom('#addCardButton', btnString);

  let domString = '';
  if (array.length > 0) {
    array.forEach((card) => {
      domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${card.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${card.language}</h6>
      <p class="card-text">${card.definition}</p>
      <div><a href="#" id="update-card--${card.firebaseKey}" class="card-link">Update Card</a>
      <a href="#" id="delete-card--${card.firebaseKey}" class="card-linkRed">Delete Card</a></div>
      <div id="timeSubmitted" class="time">submitted on: ${card.timeSubmitted[1]}</div>
    </div>
  </div>`;
    });
  } else {
    domString = 'No Cards Found';
  }
  renderToDom('#cards', domString);
};

export { showCards, emptyCards };
