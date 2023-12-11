import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from './startApp';
import client from './client';
import landingPage from '../pages/landingPage';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      landingPage();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
