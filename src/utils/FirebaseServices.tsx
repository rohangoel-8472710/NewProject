import firebase, {Firebase, auth, database} from 'react-native-firebase';
import {Database, DatabaseStatics} from 'react-native-firebase/database';
import {Platform} from 'react-native';

let userRef = firebase.database().ref('AllUsers/');
let chatRef = firebase.database().ref('Msgs/');
let roomchat = firebase.database();
let inbox = firebase.database();
var message: any;
let typingRef = firebase.database().ref('Typing/');
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

  writeUserData(email: string) {
    chatRef
      .set({
        email,
      })
      .then(data => {
        console.log('data ', data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  readUserData(callback: Function) {
    chatRef.once('value', function(snapshot: any) {
      callback(snapshot.val());
    });
  }
  //  creating new user
  signUp = (user: any, success_callback: any, failure_callback: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failure_callback);
  };

  addingUser = (user: any) => {
    const users = {email: user.email, key: user.uid};
    userRef.push(users);
  };

  // Sign In for Firebase Auth
  login = (user: any, success_callback: any, failure_callback: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback)
      .catch(failure_callback);
  };

  refOff() {
    userRef.off();
    chatRef.off();
  }

  send = (messages: Array<any>, image?: string) => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];
      const message = {
        text,
        user,
        createdAt: new Date().getTime(),
        image: image,
      };
      console.log('msg sended ', message);

      const sender = {id: message.user.uid, name: message.user.name};
      // console.warn('id is', message.user.uid);

      inbox
        .ref('Inbox/' + user._id)
        .child(user.roomID)
        .set({
          roomID: user.roomID,
          user: sender,
          lastMsg: message.image !== '' ? 'Photo' : message.text,
          createdAt: message.createdAt,
        });

      const receiver = {id: message.user._id};
      inbox
        .ref('Inbox/' + user.id)
        .child(user.roomID)
        .set({
          roomID: user.roomID,
          user: receiver,
          lastMsg: message.image !== '' ? 'Photo' : message.text,
          createdAt: message.createdAt,
        });

      roomchat.ref('chatRoom/' + user.roomID).push(message);
      this.falseTypingIndicator(user.roomID, user._id);
    }
  };

  refOn = (counter: number, id: string, callback: Function) => {
    roomchat
      .ref('chatRoom/' + id)
      .limitToLast(counter === 1 ? 20 : 20 * counter)
      .on('value', (snapshot: any) => {
        snapshot.val() === null ? callback([]) : callback(this.parse(snapshot));
      });
  };

  parse = (snapshot: any) => {
    var result = Object.keys(snapshot.val()).map(key => snapshot.val()[key]);
    result.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    // console.warn('data is=>', result);

    return result;
  };

  inboxList = (uid: string, callback: Function) => {
    inbox.ref('Inbox/' + uid).on('value', function(snapshot: any) {
      callback(snapshot.val());
    });
  };

  fetchList = (callback: Function) => {
    userRef.on('child_added', (snapshot: any) => {
      callback(snapshot.val());
    });
  };

  loadMsgs = (callback: Function) => {
    chatRef.once('value', function(snapshot: any) {
      callback(snapshot.val());
    });
  };

  getTyping = (roomID: string, uid: string, callback: Function) => {
    roomchat
      .ref('Typing/' + roomID)
      .child(uid)
      .on('value', function(snapshot: any) {
        callback(snapshot.val());
      });
  };
  falseTypingIndicator = (roomID: string, _id: string) => {
    roomchat
      .ref('Typing/' + roomID)
      .child(_id)
      .set({
        isTyping: false,
      })
      .then(data => {
        console.log('false isTyping ', data);
      })
      .catch(error => {
        console.warn('error ', error);
      });
  };

  trueTypingIndicator = (roomID: string, myUID: string) => {
    roomchat
      .ref('Typing/' + roomID)
      .child(myUID)
      .set({
        isTyping: true,
      })
      .then(data => {
        console.log('true isTyping', data);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  uploadMsgPic = (paths: any, callback: Function) => {
    if (!!paths) {
      const name = Math.random().toString();
      const imageRef = firebase
        .storage()
        .ref('msgPics')
        .child(name);
      return imageRef
        .putFile(paths, {contentType: 'jpg'})
        .then(() => {
          return imageRef.getDownloadURL();
        })
        .then(url => {
          console.log(url);
          callback(url, name);
        })
        .catch(error => {
          console.warn('Error Uploading Image', error);
        });
    } else {
      callback(null);
    }
  };
  uploadMsgVideo = (paths: any, callback: Function) => {
    debugger;
    if (!!paths) {
      const name = Math.random().toString();
      const videoRef = firebase
        .storage()
        .ref('msgVideos')
        .child(name);

      return videoRef
        .putFile(paths, {contentType: 'mp4'})
        .then(() => {
          return videoRef.getDownloadURL();
        })
        .then(url => {
          console.log(url);
          callback(url, name);
        })
        .catch(error => {
          console.warn('Error uploading video: ', error);
        });
    } else {
      callback(null);
    }
  };

  unreadMessageCount = (uid: string, roomID: string, unread: number) => {
    database()
      .ref('Inbox/' + 'OneonOne/' + uid + '/' + roomID)
      .child('unreadMessages')
      .set(unread);
  };
  unreadMessages = (uid: string, roomID: string, callBack: Function) => {
    const Receive = (data: any) => {
      if (data.snapshot.value) {
        const message = data.snapshot.value;
        const keys = Object.keys(message);
        const messages = [];

        for (let i = 0; i < keys.length; i++) {
          const arr = keys[i];
          const mess = message[arr];
          const msg = {mess, id: arr};
          if (msg.mess.user.uid !== roomID && msg.mess.message === false) {
            messages.push(msg);
          }
        }
        callBack(messages.length);
      }
    };
  };
}
export default new Firebaseservices();
