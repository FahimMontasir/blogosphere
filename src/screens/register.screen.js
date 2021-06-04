import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

const RegisterScreen = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <ContainerImage source={require("../../assets/register.jpg")}>
      <InputContainer>
        <Welcome>Create an account</Welcome>
        <MuteText>Start blogging with us!</MuteText>
        <Input
          value={name}
          autoCompleteType="name"
          label="Name"
          mode="outlined"
          left={<Input.Icon name="email" />}
          onChangeText={(text) => setName(text)}
        />
        <Input
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          label="Email"
          mode="outlined"
          left={<Input.Icon name="email" />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          value={password}
          autoCapitalize="none"
          label="Password"
          mode="outlined"
          secureTextEntry
          left={<Input.Icon name="lock" />}
          onChangeText={(text) => setPassword(text)}
        />
        <AppButton
          color="purple"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Sign Up
        </AppButton>
        <TextContainer>
          <MuteText>Already have an account?</MuteText>
          <Button onPress={() => console.log("Pressed")}>Sign In</Button>
        </TextContainer>
      </InputContainer>
      <StatusBar translucent />
    </ContainerImage>
  );
};
export default RegisterScreen;

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
const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
