// USE WITH FIREBASE AUTH
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
  document.addEventListener('click', (e) => {
    console.warn(e);
  });
};

init();
