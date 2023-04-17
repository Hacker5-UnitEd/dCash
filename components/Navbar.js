import { View, Text } from "react-native";
import React from "react";

const Navbar = ({ LeftComponent }) => {
  return (
    <View className="flex flex-row width-100 bg-cyan-500">
      <View className="left-0 bg-gray-950">
        <Text>Home</Text>
      </View>
      <View className="flex flex-row float-right bg-slate-400">
        {/* search icon */}
        <Text>S</Text>
        {/* profile pic */}
        <Text>P</Text>
      </View>
    </View>
  );
};

export default Navbar;
