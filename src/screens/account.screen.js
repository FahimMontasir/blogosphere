import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Avatar, Button, Subheading, Title } from "react-native-paper";
import styled from "styled-components/native";
import SafeArea from "../components/SafeArea";
import { UserContext } from "../services/userData";

const AccountScreen = () => {
  const { userData, onSignOutUser } = useContext(UserContext);
  return (
    <SafeArea>
      <Container>
        <Profile>
          <Avatar.Image size={150} source={{ uri: userData.photoURL }} />
        </Profile>
        <Title>{userData.displayName}</Title>
        <Subheading>{userData.email}</Subheading>
        <Button onPress={() => onSignOutUser()} color="tomato">
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
  padding-top: 20px;
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
