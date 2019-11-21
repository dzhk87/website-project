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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    } catch (err) {
      console.log('Error creating user', err.message)
    }
  } else {

  }

  return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase