import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDNrbsAUC1ZIMTMcvpljpMYDMvpr97NpLc',
  authDomain: 'rn-app-28099.firebaseapp.com',
  databaseURL: 'https://rn-app-28099.firebaseio.com',
  projectId: 'rn-app-28099',
  storageBucket: 'rn-app-28099.appspot.com',
  messagingSenderId: '276454654665',
  appId: '1:276454654665:web:4e760193c228aba0708318',
};

const fire = firebase.initializeApp(config);
export default fire;
