import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/account.screen";
import BookMarkScreen from "../screens/bookmark.screen";
import CreatePostScreen from "../screens/createPost.screen";
import SearchScreen from "../screens/search.screen";
import HomeRoute from "./HomeRoute";
import CustomButton from "../components/CustomButton";

const Tab = createBottomTabNavigator();
const AppRoute = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "#fffff2" }}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "tomato",
        style: { backgroundColor: "#fffff2", borderTopWidth: 0, elevation: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="newspaper-variant-multiple-outline"
              size={35}
            />
          ),
        }}
        component={HomeRoute}
      />
      <Tab.Screen
        name="BookMarks"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="bookmark-check-outline"
              size={35}
            />
          ),
        }}
        component={BookMarkScreen}
      />
      <Tab.Screen
        name="CreatePost"
        options={({ navigation }) => ({
          tabBarButton: () => (
            <CustomButton onPress={() => navigation.navigate("CreatePost")} />
          ),
        })}
        component={CreatePostScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="cloud-search-outline"
              size={35}
            />
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              color={color}
              name="account-tie-outline"
              size={35}
            />
          ),
        }}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};
export default AppRoute;
