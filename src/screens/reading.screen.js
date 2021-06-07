import { StatusBar } from "expo-status-bar";
import React from "react";
import { Avatar, Chip, IconButton } from "react-native-paper";
import styled from "styled-components/native";

const ReadingScreen = ({ route }) => {
  const { blogImageUrl, title, description, photoURL, displayName } =
    route.params.item;
  return (
    <Container>
      <LongImage source={{ uri: blogImageUrl }} />
      <Headline>{title}</Headline>
      <Line />
      <UserInfoContainer>
        <Profile avatar={<Avatar.Image size={24} source={{ uri: photoURL }} />}>
          {displayName}
        </Profile>
        <IconButton
          icon="account-multiple-plus"
          color={"tomato"}
          size={30}
          onPress={() => alert("Started following")}
        />
      </UserInfoContainer>
      <BodyText>{description}</BodyText>
      <StatusBar translucent />
    </Container>
  );
};
export default ReadingScreen;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff8f6;
`;
const LongImage = styled.Image`
  width: 100%;
  height: 400px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-width: 1px;
  border-color: lightgray;
`;
const Headline = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
`;
const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;
const UserInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
const Profile = styled(Chip)`
  width: 50%;
  height: 40px;
`;
const BodyText = styled.Text`
  padding: 10px;
  text-align: justify;
  font-size: 17px;
`;
