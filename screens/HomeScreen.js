import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const HomeScreen = () => {
  const navigation = useNavigation();
 
  useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
  }, []);

  let [fontsLoaded] = useFonts({
        Inter_900Black,
  });

  return !fonstsLoaded ? (
    <></>
  ) : (
    <View className="flex bg-[#1a1a1a] flex-grow">
      <Text className="mx-auto">HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
