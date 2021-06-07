import React, { useRef } from "react";
import { FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import { categoryData } from "../../services/mockData";
import Card from "./Card";
import Category from "./Category";

const datas = [1, 2, 3, 4];
const Blogs = ({ navigation }) => {
  const flatListRef = useRef();

  const getCategoryName = (name) => {
    console.log(name);
    flatListRef.current.scrollToIndex({
      animated: true,
      index: 1,
      viewPosition: 0.5,
    });
  };
  return (
    <Container>
      <Title>Blogs</Title>
      <ScrollView
        horizontal
        style={{ paddingLeft: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {categoryData.map((category) => (
          <Category
            categoryName={category.categoryName}
            categoryUri={category.categoryUri}
            key={category.categoryName}
            onPress={() => getCategoryName(category.categoryName)}
          />
        ))}
      </ScrollView>
      <FlatList
        ref={flatListRef}
        initialScrollIndex={1}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={datas}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigation.navigate("Reading", { item })}
          />
        )}
        keyExtractor={(item) => item.toString()}
      />
    </Container>
  );
};
export default Blogs;

const Container = styled.View``;
const Title = styled.Text`
  font-size: 25px;
  color: #061649;
  padding-bottom: 10px;
  margin-left: 20px;
`;
