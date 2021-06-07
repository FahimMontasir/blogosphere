import React from "react";
import styled from "styled-components/native";
import { Avatar } from "react-native-paper";

const AppAvatar = ({ imageUri, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Avatar.Image
        style={{ backgroundColor: "white" }}
        size={50}
        source={{ uri: imageUri }}
      />
    </Container>
  );
};
export default AppAvatar;

const Container = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffebf1;
  elevation: 5;
`;
