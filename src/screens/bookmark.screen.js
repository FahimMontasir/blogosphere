import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import SafeArea from "../components/SafeArea";
import LottieView from "lottie-react-native";

const BookMarkScreen = (props) => {
  return (
    <SafeArea>
      <Container>
        <MuteText>coming soon...</MuteText>
        <AppLottieView
          source={require("../../assets/comingsoon.json")}
          autoPlay
          loop
        />
        <StatusBar style="auto" />
      </Container>
    </SafeArea>
  );
};
export default BookMarkScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const AppLottieView = styled(LottieView)`
  width: 100%;
  height: 100%;
`;
const MuteText = styled.Text`
  color: gray;
  font-size: 17px;
  position: absolute;
  bottom: 250px;
`;
