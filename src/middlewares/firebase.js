import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbvUnGq3Aihl8NfoZg4DWnHR2C8qrWy4c",
  authDomain: "mes-recettes1.firebaseapp.com",
  projectId: "mes-recettes1",
  storageBucket: "mes-recettes1.firebasestorage.app",
  messagingSenderId: "421455743895",
  appId: "1:421455743895:web:0a3f1ee64a8fdd6a26d2d2",
  measurementId: "G-DM2NDYB76X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };