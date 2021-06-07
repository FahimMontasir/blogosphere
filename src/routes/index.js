import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoute from "./AppRoute";
import LoginRoute from "./LoginRoute";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
};
export default Routes;
