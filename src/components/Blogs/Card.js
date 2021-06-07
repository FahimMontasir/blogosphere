import React from "react";
import { Avatar, Chip } from "react-native-paper";
import styled from "styled-components/native";

const Card = ({
  uri = "https://i.ibb.co/xSDmhFv/programmer.jpg",
  name = "Fahim Montasir",
  personUri = "https://i.ibb.co/xSDmhFv/programmer.jpg",
  headline = "10 awesome thing about javascript",
  tag = "javascript",
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <BackgroundImgContainer source={{ uri }}>
        <Profile
          avatar={<Avatar.Image size={24} source={{ uri: personUri }} />}
        >
          {name}
        </Profile>
        <HeadlineContainer>
          <Headline numberOfLines={2}>{headline}</Headline>
          <Tag numberOfLines={1}>#{tag}</Tag>
        </HeadlineContainer>
      </BackgroundImgContainer>
    </Container>
  );
};
export default Card;

const Container = styled.TouchableHighlight.attrs({
  activeOpacity: 0.9,
  underlayColor: "purple",
})`
  height: 320px;
  width: 320px;
  border-radius: 30px;
  overflow: hidden;
  elevation: 5;
  margin: 18px;
`;
const BackgroundImgContainer = styled.ImageBackground`
  height: 320px;
  width: 320px;
`;
const Profile = styled(Chip)`
  width: 50%;
  top: 20px;
  left: 150px;
`;
const Headline = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
const HeadlineContainer = styled.View`
  margin-top: 150px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Tag = styled.Text`
  font-size: 17px;
  color: yellow;
  padding-top: 10px;
  padding-bottom: 60px;
`;
