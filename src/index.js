import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCMroePf1_reeWBXNbf6LYdbYSEdqx-Ywc",
  authDomain: "linkedin-app-bah-as.firebaseapp.com",
  projectId: "linkedin-app-bah-as",
  storageBucket: "linkedin-app-bah-as.appspot.com",
  messagingSenderId: "233130276230",
  appId: "1:233130276230:web:79cab7ced2de32592fe807"
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
