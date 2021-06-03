import { StatusBar } from "expo-status-bar";
import React from "react";
import { Avatar, Chip, IconButton } from "react-native-paper";
import styled from "styled-components/native";

const ReadingScreen = ({
  uri = "https://i.ibb.co/xSDmhFv/programmer.jpg",
  personUri = "https://i.ibb.co/xSDmhFv/programmer.jpg",
  name = "Fahim Montasir",
  headline = "10 awesome thing about javascript",
  description = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere id modi animi dolorem architecto laudantium commodi, nulla excepturi impedit natus libero dignissimos voluptatum earum atque? Culpa modi autem possimus vero praesentium mollitia dolorem ipsam velit ex, vel sint voluptates fugiat amet tempore, laborum, veritatis quisquam minus explicabo temporibus ratione. Obcaecati repellendus distinctio, voluptatibus iure facere numquam ipsam reprehenderit corrupti accusantium? Reprehenderit eveniet odit odio. Eos reprehenderit vero ratione aut modi in consectetur dolor minus temporibus quibusdam voluptate, veniam debitis animi minima ab fuga perferendis? Ducimus facere aut officiis nulla minima aperiam minus ut aliquid, consequuntur itaque dicta veritatis nemo, suscipit corrupti at ipsum! Id ea ad magni quasi unde consequatur modi quis reprehenderit, hic labore eveniet facilis provident minima laborum deserunt accusamus dolore aliquam eum repellendus illo distinctio asperiores ratione veniam ipsam! Quae voluptatum quaerat neque quam quos sapiente amet voluptates aperiam ipsam, illo repudiandae dolorum voluptate placeat tempore. Sequi inventore molestias animi unde eum hic, voluptatibus laboriosam dignissimos eveniet, expedita facere blanditiis voluptate excepturi delectus nisi. Temporibus magni totam, enim voluptatum eius sed optio magnam! Facere sequi id libero sunt, aliquam necessitatibus maiores ratione aspernatur cum perferendis omnis, reiciendis soluta? Reprehenderit cumque vero autem dolor maxime nulla minima!",
}) => {
  return (
    <Container>
      <LongImage source={{ uri }} />
      <Headline>{headline}</Headline>
      <Line />
      <UserInfoContainer>
        <Profile
          avatar={<Avatar.Image size={24} source={{ uri: personUri }} />}
        >
          {name}
        </Profile>
        <IconButton
          icon="account-multiple-plus"
          color={"tomato"}
          size={30}
          onPress={() => console.log("follow")}
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
