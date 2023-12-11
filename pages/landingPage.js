import renderToDom from '../utils/renderToDom';
import loginButton from '../components/loginButton';

const landingPage = () => {
  const landingPageHTML = `
  <div id="landingPage">
    <div class="welcome">Welcome to vocab-YOU-lary!</div>
      <div class="dogGiph">
        <img clas="dogDiph" style="border-radius: 20%; height="250px"; width="250px"" src="https://media.giphy.com/media/ZThQqlxY5BXMc/giphy.gif">
      </div>
    <div class="login"> Please Login to Continue: </div>
    <div id='loginButton'></div>
  </div>`;
  renderToDom('#app', landingPageHTML);
  loginButton();
  console.warn('hi');
};
export default landingPage;
