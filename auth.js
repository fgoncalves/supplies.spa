import firebase from 'firebase';

// TODO: Get this to some dotenv file....
const config = {
    apiKey: "AIzaSyDQgCxnG8KMaxJCViXGVg0FyPZn-25A-M4",
    authDomain: "supplies-1d118.firebaseapp.com",
    databaseURL: "https://supplies-1d118.firebaseio.com",
    storageBucket: "supplies-1d118.appspot.com",
    messagingSenderId: "982579013865"
};

const app = firebase.initializeApp(config);
console.log(app.name)

const auth = firebase.auth();

export default auth;
