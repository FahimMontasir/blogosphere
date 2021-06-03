import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

const LoginScreen = () => {
  return (
    <ContainerImage source={require("../../assets/login.jpg")}>
      <InputContainer>
        <Welcome>Welcome Blogger!</Welcome>
        <MuteText>Sign in to continue</MuteText>
        <Input
          autoCapitalize="none"
          autoCompleteType="email"
          label="Email"
          mode="outlined"
          left={<Input.Icon name="email" />}
          onChangeText={(text) => console.log(text)}
        />
        <Input
          autoCapitalize="none"
          label="Password"
          mode="outlined"
          secureTextEntry
          left={<Input.Icon name="lock" />}
          onChangeText={(text) => console.log(text)}
        />
        <AppButton mode="contained" onPress={() => console.log("Pressed")}>
          Sign In
        </AppButton>
        <AppButton onPress={() => console.log("Pressed")}>Sign Up</AppButton>
      </InputContainer>
      <StatusBar translucent />
    </ContainerImage>
  );
};
export default LoginScreen;

const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
const InputContainer = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #fffff2;
  width: 100%;
  padding: 20px;
`;
const Welcome = styled.Text`
  font-size: 30px;
`;
const MuteText = styled.Text`
  color: gray;
  font-size: 17px;
`;
const Input = styled(TextInput)`
  margin-top: 15px;
`;
const AppButton = styled(Button)`
  margin-top: 20px;
  height: 50px;
  justify-content: center;
`;
