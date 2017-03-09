import firebase from 'firebase';

// TODO: Get this to some dotenv file....
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

const app = firebase.initializeApp(config);
console.log(app.name)

const auth = firebase.auth();

export default auth;
