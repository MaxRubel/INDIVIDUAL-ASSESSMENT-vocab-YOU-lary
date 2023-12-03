import { addCard, updateCard } from '../api/cardsData';
import submitSuccess from '../utils/submitSuccess';
import timeSubmitted from '../utils/timeSubmitted';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // SUBMIT CARD EVENT
    if (e.target.id.includes('submitCard')) {
      const payload = {
        title: document.getElementById('title').value,
        definition: document.getElementById('definition').value,
        language: document.getElementById('language').value,
        timeSubmitted: timeSubmitted(),
        private: document.getElementById('private').checked
      };

      addCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
        });
      });
      document.getElementById('submitCard').reset();
    }
    submitSuccess();
  });
};

export default formEvents;
