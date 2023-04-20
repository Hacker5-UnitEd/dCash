import { View, Text } from "react-native";
import React from "react";
import BalanceCard from "../../components/BalanceCard";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const FinanceTab = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    <View className="mt-5">
      <BalanceCard balance={3000} />
      <Text
        className="text-white text-3xl mt-7"
        style={{ fontFamily: "Inter_900Black" }}
      >
        Tools
      </Text>
    </View>
  );
};

export default FinanceTab;
