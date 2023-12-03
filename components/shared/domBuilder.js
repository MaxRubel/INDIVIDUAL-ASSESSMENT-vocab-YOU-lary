import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="addCardButton"></div>
    <div id="form-container"></div>
    <div id="cards"></div>
    <div id="view"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
