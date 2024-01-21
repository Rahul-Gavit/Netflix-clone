import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuZFn4SlUe6ZjXNc7i5NdYw0yio2lusAA",
  authDomain: "netflix-clone-703be.firebaseapp.com",
  projectId: "netflix-clone-703be",
  storageBucket: "netflix-clone-703be.appspot.com",
  messagingSenderId: "973912120454",
  appId: "1:973912120454:web:21e136933db68b02ec4507",
  measurementId: "G-GT1SLVXB78",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
