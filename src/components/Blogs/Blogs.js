import React from "react";
import styled from "styled-components/native";
import Card from "./Card";
import Category from "./Category";

const Blogs = ({ navigation }) => {
  return (
    <Container>
      <Title>Blogs</Title>
      <Category />
      <Card onPress={() => navigation.navigate("Reading")} />
    </Container>
  );
};
export default Blogs;

const Container = styled.View`
  padding: 20px 0 20px 20px;
`;
const Title = styled.Text`
  font-size: 25px;
  color: #061649;
  padding-bottom: 10px;
`;
