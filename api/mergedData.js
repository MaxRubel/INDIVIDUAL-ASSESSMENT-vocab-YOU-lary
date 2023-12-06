import { getCards } from './cardsData';
import { getLangs } from './languageData';

const getAllDetails = (user) => new Promise((resolve, reject) => {
  getCards(user).then((cardArray) => {
    getLangs(user).then((languageArray) => {
      resolve({ cardArray, languageArray });
    }).catch(reject);
  });
});

export default getAllDetails;
