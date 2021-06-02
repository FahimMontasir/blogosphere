import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
const Score = ({ points = 100 }) => {
  return (
    <Gradient
      colors={["#FF9770", "#FF7795"]}
      start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Star source={require("../../assets/star.png")} />
      <Points>{points} Points</Points>
    </Gradient>
  );
};
export default Score;

const Gradient = styled(LinearGradient)`
  padding: 15px;
  border-radius: 30px;
  width: 160px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Star = styled.Image`
  width: 30px;
  height: 30px;
`;
const Points = styled.Text`
  color: white;
  font-size: 18px;
`;
