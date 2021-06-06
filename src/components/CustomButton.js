import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CustomButton = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Gradient
        colors={["#FF9770", "#FF7795"]}
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <MaterialCommunityIcons name="plus-circle" color="white" size={45} />
      </Gradient>
    </Container>
  );
};
export default CustomButton;

const Container = styled.TouchableOpacity``;
const Gradient = styled(LinearGradient)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  top: -40px;
`;
