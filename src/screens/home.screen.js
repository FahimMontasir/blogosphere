import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import AppAvatar from "../components/AppAvatar";
import Blogs from "../components/Blogs/Blogs";
import Greetings from "../components/Greetings";
import SafeArea from "../components/SafeArea";
import Score from "../components/Score";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Container>
        <Header>
          <AppAvatar />
          <Score />
        </Header>
        <Greetings />
        <Blogs navigation={navigation} />
        <StatusBar style="auto" backgroundColor="#fffff2" />
      </Container>
    </SafeArea>
  );
};
export default HomeScreen;
const Container = styled.View`
  background-color: #fffff2;
  flex: 1;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;
