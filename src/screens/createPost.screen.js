import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Headline, Subheading, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import SafeArea from "../components/SafeArea";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAvoidingView, Platform } from "react-native";

const CreatePostScreen = (props) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState("JavaScript");
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
          <AppButton mode="contained" onPress={() => console.log("Pressed")}>
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
