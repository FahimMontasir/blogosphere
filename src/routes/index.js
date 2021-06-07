import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoute from "./AppRoute";
import LoginRoute from "./LoginRoute";
import { UserContext } from "../services/userData";

const Routes = () => {
  const { userData } = useContext(UserContext);
  return (
    <NavigationContainer>
      {userData.email ? <AppRoute /> : <LoginRoute />}
    </NavigationContainer>
  );
};
export default Routes;
