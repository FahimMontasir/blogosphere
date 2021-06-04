import { StatusBar } from "expo-status-bar";
import React from "react";
import { Avatar, Button, Subheading, Title } from "react-native-paper";
import styled from "styled-components/native";
import SafeArea from "../components/SafeArea";

const AccountScreen = (props) => {
  return (
    <SafeArea>
      <Container>
        <Profile>
          <Avatar.Image size={150} source={require("../../assets/star.png")} />
        </Profile>
        <Title>Fahim Montasir</Title>
        <Subheading>fahimmontasirshakil@gam.com</Subheading>
        <Button onPress={() => console.log("logout")} color="tomato">
          Log Out
        </Button>
        <StatusBar style="auto" />
      </Container>
    </SafeArea>
  );
};
export default AccountScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const Profile = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffebf1;
  elevation: 5;
`;
