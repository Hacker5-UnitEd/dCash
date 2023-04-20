import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import Navbar from "../components/Navbar";
import FinanceTab from "./tabs/FinanceTab";
import DebtTrackerTab from "./tabs/DebtTrackerTab";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return !fontsLoaded ? (
    <></>
  ) : (
    <ScrollView className="flex bg-[#1a1a1a] flex-grow">
      {/* navbar */}
      <Navbar
        LeftComponent={
          <>
            <Text>Home</Text>
          </>
        }
      />

      <View className="flex px-[35] pt-5 mt-2">
        <Text
          className="text-white text-5xl mt-1"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Hello
        </Text>
        <Text
          className="text-white text-5xl mt-1"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Phynxx
        </Text>
        {/* tab strip */}
        <DebtTrackerTab />
      </View>

      {/* ledger */}
    </ScrollView>
  );
};

export default HomeScreen;
