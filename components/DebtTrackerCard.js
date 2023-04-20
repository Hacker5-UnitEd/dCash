import { View, Text, StyleSheet } from "react-native";
import React from "react";

const DebtTrackerCard = ({ dep }) => {
  return (
    <>
      <View className="bg-[#313131] p-5 rounded-2xl h-52">
        <Text
          className="text-white text-2xl mt-1"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Daily Expenditure
        </Text>
        <Text
          className="text-gray-300 text-sm mt-4"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Here you can see your daily expenditure progress
        </Text>
        <Text
          className="text-white text-2xl mt-4 mb-4"
          style={{ fontFamily: "Inter_900Black" }}
        >
          {dep}%
        </Text>
        <View className="bg-[#414141] w-auto h-2 rounded-full">
          <View
            className="bg-[#1e90ff] h-2 rounded-full"
            style={StyleSheet.create({ width: dep + "%" })}
          ></View>
        </View>
      </View>
      <View className="bg-[#252525] h-2 mx-3 rounded-bl-2xl rounded-br-2xl"></View>
      <View className="bg-[#202020] h-2 mx-5 rounded-bl-2xl rounded-br-2xl"></View>
    </>
  );
};

export default DebtTrackerCard;
