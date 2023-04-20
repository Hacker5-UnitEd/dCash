import { View, Text } from "react-native";
import React from "react";

const BalanceCard = ({ balance }) => {
  return (
    <View>
      <View className="bg-[#313131] p-5 rounded-2xl">
        <Text
          className="text-white text-2xl mt-1"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Balance
        </Text>
        <Text
          className="text-gray-300 text-sm mt-4"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Here you can see your balance
        </Text>
        <Text
          className="text-white text-2xl mt-4 mb-10"
          style={{ fontFamily: "Inter_900Black" }}
        >
          {balance}
        </Text>
      </View>
      <View className="bg-[#252525] h-2 mx-3 rounded-bl-2xl rounded-br-2xl"></View>
      <View className="bg-[#202020] h-2 mx-5 rounded-bl-2xl rounded-br-2xl"></View>
    </View>
  );
};

export default BalanceCard;
