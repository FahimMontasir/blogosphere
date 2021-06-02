import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { Avatar, Chip } from "react-native-paper";
import styled from "styled-components/native";
import AppAvatar from "../AppAvatar";

const Card = ({
  cardUri = "https://i.ibb.co/xSDmhFv/programmer.jpg",
  name = "Fahim Montasir",
  personUri = "https://i.ibb.co/xSDmhFv/programmer.jpg",
}) => {
  return (
    <Container>
      <BackgroundImgContainer source={{ uri: cardUri }}>
        <Profile
          avatar={<Avatar.Image size={24} source={{ uri: personUri }} />}
        >
          {name}
        </Profile>
        <Headline numberOfLines={2}>
          Build a Creative Mind Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde, temporibus.
        </Headline>
      </BackgroundImgContainer>
    </Container>
  );
};
export default Card;
const Container = styled.TouchableOpacity`
  height: 320px;
  width: 320px;
  border-radius: 50px;
  overflow: hidden;
  elevation: 5;
  margin: 5px;
`;
const BackgroundImgContainer = styled.ImageBackground`
  height: 320px;
  width: 320px;
`;
const Profile = styled(Chip)`
  width: 50%;
  margin-top: 30px;
  margin-left: 10px;
`;
const Headline = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin-top: 120px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.3);
`;
