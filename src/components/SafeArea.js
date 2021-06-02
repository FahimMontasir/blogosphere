import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

const SafeArea = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
export default SafeArea;

const SafeAreaView = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight}px;
  flex: 1;
`;
