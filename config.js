import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyADDB1sVWWbrifms1c4qhy-1ZoIDA4forQ",
    authDomain: "barter-system-472b1.firebaseapp.com",
    databaseURL: "https://barter-system-472b1.firebaseio.com",
    projectId: "barter-system-472b1",
    storageBucket: "barter-system-472b1.appspot.com",
    messagingSenderId: "574809493883",
    appId: "1:574809493883:web:5bf40301b30d504104adde"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
