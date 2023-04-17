import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import Navbar from "../components/Navbar";

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
    <ScrollView>
      {/* navbar */}
      <Navbar
        LeftComponent={
          <>
            <Text>Home</Text>
          </>
        }
      />
      <View>
        <Text>Hello</Text>
        <Text>Phynxx</Text>
      </View>
      {/* tab strip */}
      {/* daily expenditure panel */}
      {/* ledger */}
    </ScrollView>
  );
};

export default HomeScreen;
