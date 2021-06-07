import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Greetings = ({ name = "Fahim" }) => {
  const [greet, setGreet] = useState(null);
  const [imgUri, setImgUri] = useState(null);
  const time = new Date().getHours();

  useEffect(() => {
    if (time > 4 && time < 12) {
      setGreet("Good Morning");
      setImgUri("https://i.ibb.co/5nv6pzk/sun.png");
    } else if (time >= 12 && time < 15) {
      setGreet("Good Afternoon");
      setImgUri("https://i.ibb.co/jJV5SWk/sun-1.png");
    } else if (time >= 15 && time < 21) {
      setGreet("Good Evening");
      setImgUri("https://i.ibb.co/h12LsMQ/night.png");
    } else if (time <= 4 || time >= 21) {
      setGreet("Good Night");
      setImgUri("https://i.ibb.co/h12LsMQ/night.png");
    }
  }, []);
  return (
    <Container>
      <View>
        <Name>Hi {name},</Name>
        <Greet>{greet}!</Greet>
      </View>
      <Weather source={{ uri: imgUri }} />
    </Container>
  );
};
export default Greetings;

const Container = styled.View`
  margin: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 40px;
  color: #061649;
`;
const Greet = styled.Text`
  font-size: 20px;
  color: grey;
`;
const Weather = styled.Image`
  height: 100px;
  width: 100px;
  margin-right: 15px;
`;
