import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDY0xMOpUYV6ZoAyEqrK9VpXaajjWTENuI",
  authDomain: "website-project-23ada.firebaseapp.com",
  databaseURL: "https://website-project-23ada.firebaseio.com",
  projectId: "website-project-23ada",
  storageBucket: "website-project-23ada.appspot.com",
  messagingSenderId: "709066478116",
  appId: "1:709066478116:web:c7c3354dd44282f2dbfeb1"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase