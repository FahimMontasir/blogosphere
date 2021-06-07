import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import styled from "styled-components/native";
import AppAvatar from "../components/AppAvatar";
import Blogs from "../components/Blogs/Blogs";
import Greetings from "../components/Greetings";
import SafeArea from "../components/SafeArea";
import Score from "../components/Score";
import { UserContext } from "../services/userData";
const HomeScreen = ({ navigation }) => {
  const { userData } = useContext(UserContext);
  return (
    <SafeArea>
      <Container>
        <Header>
          <AppAvatar
            imageUri={userData.photoURL}
            onPress={() => navigation.navigate("Account")}
          />
          <Score />
        </Header>
        <Greetings name={userData.displayName} />
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
