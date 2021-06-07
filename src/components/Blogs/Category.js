import React from "react";
import styled from "styled-components/native";

const Category = ({ categoryName, categoryUri, onPress }) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <Icon source={{ uri: categoryUri }} />
      </IconContainer>
      <Caption>{categoryName}</Caption>
    </Container>
  );
};
export default Category;

const Container = styled.TouchableOpacity`
  background-color: #fff8fa;
  padding: 10px;
  width: 180px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  elevation: 5;
  margin: 10px 5px;
`;
const Caption = styled.Text`
  font-size: 18px;
  color: gray;
`;
const IconContainer = styled.View`
  padding: 5px;
  background-color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  elevation: 5;
`;
const Icon = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;
