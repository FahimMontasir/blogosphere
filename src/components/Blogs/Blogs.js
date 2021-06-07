import React, { useContext, useEffect } from "react";
import { FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import { BlogContext } from "../../services/BlogData";
import { categoryData } from "../../services/mockData";
import Card from "./Card";
import Category from "./Category";

const Blogs = ({ navigation }) => {
  const { getAllBlogs, allBlogs, isSuccess, getBlogsByCategory } =
    useContext(BlogContext);
  useEffect(() => {
    getAllBlogs();
  }, [isSuccess]);

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
            onPress={() => getBlogsByCategory(category.categoryName)}
          />
        ))}
      </ScrollView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={allBlogs}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigation.navigate("Reading", { item })}
          />
        )}
        keyExtractor={(item) => item.id}
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
