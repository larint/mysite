import { firebase } from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAcI5nflyvD1fYCxsLpH8DUPPQAtap0qcA",
    authDomain: "recv0301.firebaseapp.com",
    projectId: "recv0301",
    storageBucket: "recv0301.appspot.com",
    messagingSenderId: "372821824166",
    appId: "1:372821824166:web:7f4c85034eaefa48181a67"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
export default fire