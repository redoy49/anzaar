import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC_zul_JNLgLueRy3fQn4-Gj78hlaDwLUk",
  authDomain: "login-register-46eb1.firebaseapp.com",
  projectId: "login-register-46eb1",
  storageBucket: "login-register-46eb1.appspot.com",
  messagingSenderId: "785209074688",
  appId: "1:785209074688:web:f3468f2c429d5e7a89a4e5"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (err) {
    console.error("Google login error:", err)
    throw err
  }
}
