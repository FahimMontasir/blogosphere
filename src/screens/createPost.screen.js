import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { Button, Headline, Subheading, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import SafeArea from "../components/SafeArea";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAvoidingView, Platform } from "react-native";
import { BlogContext } from "../services/BlogData";
import { UserContext } from "../services/userData";

const CreatePostScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("JavaScript");
  const { onPostBlog, isSuccess, setIsSuccess } = useContext(BlogContext);
  const { userData } = useContext(UserContext);
  const { displayName, email, photoURL } = userData;
  if (isSuccess) {
    return (
      <SafeArea>
        <Container>
          <SuccessText>Your post was successful</SuccessText>
          <AppButton
            mode="outlined"
            onPress={() => {
              setIsSuccess(false);
              setTitle("");
              setDescription("");
              navigation.navigate("CreatePost");
            }}
          >
            write a new blog
          </AppButton>
          <StatusBar style="auto" />
        </Container>
      </SafeArea>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeArea>
        <Container>
          <Headline>Post your Blog</Headline>
          <Input
            value={title}
            placeholder="Type your amazing title"
            onChangeText={(text) => setTitle(text)}
          />
          <PickerContainer>
            <Subheading>Chose a category:</Subheading>
            <AppPicker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="JavaScript" value="JavaScript" />
              <Picker.Item label="ReactJs" value="ReactJs" />
              <Picker.Item label="NodeJs" value="NodeJs" />
              <Picker.Item label="Others" value="Others" />
            </AppPicker>
          </PickerContainer>
          <Input
            value={description}
            placeholder="Type your verbose blog story"
            mode="outlined"
            multiline
            numberOfLines={10}
            onChangeText={(text) => setDescription(text)}
          />
          <AppButton
            mode="contained"
            onPress={() =>
              onPostBlog(
                title,
                category,
                description,
                displayName,
                email,
                photoURL
              )
            }
          >
            Post
          </AppButton>
          <StatusBar style="auto" />
        </Container>
      </SafeArea>
    </KeyboardAvoidingView>
  );
};
export default CreatePostScreen;

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;
const Input = styled(TextInput)`
  margin-top: 15px;
`;
const PickerContainer = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const AppPicker = styled(Picker)`
  width: 150px;
`;
const AppButton = styled(Button)`
  margin-top: 20px;
  height: 50px;
  justify-content: center;
`;
const SuccessText = styled.Text`
  color: green;
  font-size: 25px;
  text-align: center;
`;
