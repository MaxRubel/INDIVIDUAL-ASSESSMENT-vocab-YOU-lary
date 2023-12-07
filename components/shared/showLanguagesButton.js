import { getLangs } from '../../api/languageData';
import showLanguages from '../../pages/languages';

const backButtonLang = (user) => {
  document.querySelector('#showLangs').addEventListener('click', () => {
    getLangs(user).then(showLanguages);
  });
};

export default backButtonLang;
