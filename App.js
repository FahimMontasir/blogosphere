import "react-native-gesture-handler";
import React from "react";
import UserContextProvider from "./src/services/userData";
import Routes from "./src/routes";

const App = () => (
  <UserContextProvider>
    <Routes />
  </UserContextProvider>
);

export default App;
