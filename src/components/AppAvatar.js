import React from "react";
import styled from "styled-components/native";
import { Avatar } from "react-native-paper";

const AppAvatar = (props) => {
  return (
    <Container>
      <Avatar.Image size={50} source={require("../../assets/star.png")} />
    </Container>
  );
};
export default AppAvatar;

const Container = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffebf1;
  elevation: 5;
`;
