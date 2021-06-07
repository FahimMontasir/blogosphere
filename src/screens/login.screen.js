import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import ErrorMessage from "../components/ErrorMessage";
import { UserContext } from "../services/userData";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError, onSignInUser } = useContext(UserContext);

  return (
    <ContainerImage source={require("../../assets/login.jpg")}>
      <InputContainer>
        <Welcome>Welcome Blogger!</Welcome>
        <MuteText>Sign in to continue</MuteText>
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
        <ErrorMessage error={error} />
        <AppButton
          mode="contained"
          onPress={() => onSignInUser(email, password)}
        >
          Sign In
        </AppButton>
        <AppButton
          mode="outlined"
          onPress={() => {
            navigation.navigate("SignUp");
            setError(null);
          }}
        >
          Sign Up
        </AppButton>
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
