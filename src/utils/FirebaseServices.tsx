import firebase, {Firebase, auth} from 'react-native-firebase';
import {Database, DatabaseStatics} from 'react-native-firebase/database';
import {Platform} from 'react-native';

let userRef = firebase.database().ref('AllUsers/');
class Firebaseservices {
  constructor() {
    this.initializeFireBase();
  }

  initializeFireBase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(
        {
          apiKey: 'AIzaSyDt8fEVr3ibICkH9PQbfEgWqBVGgQM3d1w',
          appId:
            Platform.OS === 'ios'
              ? '1:454056229515:ios:42a3b65954d1ff0b82328e'
              : '1:454056229515:android:1834ce88240e89ee82328e',
          databaseURL: 'https://newproject-6655b.firebaseio.com',
          messagingSenderId: '454056229515',
          projectId: 'newproject-6655b',
          storageBucket: 'newproject-6655b.appspot.com',
        },
        'NewProject',
      );
    }
  };

  //  creating new user ---------------------
  signUp = (user: any, success_callback: any, failure_callback: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failure_callback);
  };

  addingUser = (user: any) => {
    const users = {email: user.email};
    userRef.push(users);
  };

  // Sign In for Firebase Auth ------------
  login = (user: any, success_callback: any, failure_callback: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback)
      .catch(failure_callback);
  };

  refOff() {
    userRef.off();
  }
}

export default new Firebaseservices();
