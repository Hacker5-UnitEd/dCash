import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const ContinueScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return !fontsLoaded ? (
    <></>
  ) : (
    <View className="flex bg-[#1a1a1a] flex-grow">
      <View className="flex mx-auto mt-5">
        <Image
          source={require("../../assets/continue-pic.png")}
          style={{ width: 250, height: 250 }}
        />
      </View>
      <View className="flex px-[35] pt-5 mt-2">
        <Text
          className="text-white text-4xl mt-1"
          style={{ fontFamily: "Inter_900Black" }}
        >
          The only
        </Text>
        <Text
          className="text-white text-4xl mt-1"
          style={{ fontFamily: "Inter_900Black" }}
        >
          finance
        </Text>
        <Text
          className="text-white text-4xl mt-1"
          style={{ fontFamily: "Inter_900Black" }}
        >
          app you need
        </Text>
      </View>
      <View className="flex flex-row px-[35] pt-16 w-auto">
        <TouchableOpacity
          className="flex-grow flex bg-[#1e90ff] text-white font-bold py-5 px-4 rounded-full"
          onPress={() => navigation.navigate("EmailSignIn")}
        >
          <Text
            className="text-white mx-auto"
            style={{ fontFamily: "Inter_900Black" }}
          >
            Sign in with E-mail
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row w-auto px-[35] mt-6">
        <TouchableOpacity className="flex-1 mr-3 flex-grow flex bg-[#1a1a1a] text-white font-bold border-[#ffffff] border-2 py-5 px-4 rounded-full">
          <Text
            className="text-white mx-auto"
            style={{ fontFamily: "Inter_900Black" }}
          >
            Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 ml-3 flex-grow flex bg-[#1a1a1a] text-white font-bold border-[#ffffff] border-2  py-5 px-4 rounded-full">
          <Text
            className="text-white mx-auto"
            style={{ fontFamily: "Inter_900Black" }}
          >
            Apple ID
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row px-[35] w-auto mt-8">
        <Text className="text-white text-xs mx-auto">
          By continuing, you agree to the Terms and Conditions
        </Text>
      </View>
    </View>
  );
};

export default ContinueScreen;
