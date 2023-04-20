import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BalanceCard from "../../components/BalanceCard";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const FinanceTab = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    <View className="mt-6">
      <View className="flex flex-row mb-8">
        <TouchableOpacity className="flex bg-[#1a1a1a] py-2 px-6 rounded-full mr-3">
          <Text
            className="text-gray-500 mx-auto"
            style={{ fontFamily: "Inter_900Black" }}
          >
            Debt Tracker
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex bg-[#1e90ff] text-white py-2 px-6 rounded-full"
          disabled={true}
        >
          <Text
            className="text-white mx-auto"
            style={{ fontFamily: "Inter_900Black" }}
          >
            Finance
          </Text>
        </TouchableOpacity>
      </View>
      <BalanceCard balance={3000} />
      <Text
        className="text-white text-3xl mt-8"
        style={{ fontFamily: "Inter_900Black" }}
      >
        Tools
      </Text>
      <View className="flex flex-col mt-2">
        <View className="flex flex-row w-auto mt-5">
          <TouchableOpacity className="bg-[#313131] p-5 rounded-2xl flex-grow mr-2 aspect-square">
            <Text
              className="text-white text-s"
              style={{ fontFamily: "Inter_900Black" }}
            >
              Buy Tokens
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#313131] p-5 rounded-2xl flex-grow ml-2 aspect-square">
            <Text
              className="text-white text-s"
              style={{ fontFamily: "Inter_900Black" }}
            >
              Transfer Tokens
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row w-auto mt-2 mb-10">
          <TouchableOpacity className="bg-[#313131] p-5 rounded-2xl flex-grow mr-2 aspect-square">
            <Text
              className="text-white text-s"
              style={{ fontFamily: "Inter_900Black" }}
            >
              Price Chart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#313131] p-5 rounded-2xl flex-grow ml-2 aspect-square">
            <Text
              className="text-white text-s"
              style={{ fontFamily: "Inter_900Black" }}
            >
              Recieve Tokens
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FinanceTab;
