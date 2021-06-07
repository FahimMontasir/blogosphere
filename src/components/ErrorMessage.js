import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <ErrorMsg>{error}</ErrorMsg>;
};
export default ErrorMessage;

const ErrorMsg = styled.Text`
  font-size: 17px;
  color: tomato;
  padding: 10px 0;
`;
