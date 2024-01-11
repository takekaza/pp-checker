import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 追加
import { createContext } from "react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

/*
  useContext
*/
const profile = {
  name: "takei",
  age: 30,
};
const ProfileContext = createContext(profile);

root.render(
  // Context
  <ProfileContext.Provider value={profile}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProfileContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// グローバル化
export default ProfileContext;
