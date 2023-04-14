import { View, Text, TextInput } from "react-native";
import React from "react";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Link, useNavigation } from "@react-navigation/native";

const OTPComponent = ({ password, confPassword, email }) => {
  const navigation = useNavigation();
  const OTP = "123456";

  return (
    <View className="flex bg-[#1a1a1a] flex-grow">
      <View className="flex px-[35] pt-5 mt-[100]">
        <View className="bg-[#1a1a1a] border-2 border-[#555555] rounded-full py-4 px-5">
          <TextInput
            placeholder="E-mail"
            defaultValue={email}
            editable={false}
            className="text-[#555555]"
          />
        </View>
        <View className="bg-[#1a1a1a] border-2 border-[#555555] rounded-full py-4 px-5 mt-10">
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            defaultValue={password}
            editable={false}
            className="text-[#555555]"
          />
        </View>
        <View className="bg-[#1a1a1a] border-2 border-[#555555] rounded-full py-4 px-5 mt-10">
          <TextInput
            secureTextEntry={true}
            placeholder="Confirm Password"
            defaultValue={confPassword}
            editable={false}
            className="text-[#555555]"
          />
        </View>
        <View className="bg-[#1a1a1a] border-2 border-[#ffffff] rounded-full py-4 px-5 mt-10">
          <TextInput
            placeholder="Enter OTP"
            placeholderTextColor={"#888888"}
            className="text-white"
            onChangeText={(_otp) => {
              if (_otp == OTP) navigation.navigate("Home");
            }}
          />
        </View>
        <Text
          className="text-white mt-7"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Check your E-mail for the OTP
        </Text>
        <Text
          className="text-white mt-3"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Didn't receive anything?{" "}
          <Text style={{ color: "#1e90ff" }} onPress={() => {}}>
            Resend OTP
          </Text>
        </Text>
        <Text
          className="text-white mt-3"
          style={{ fontFamily: "Inter_900Black" }}
        >
          <Text
            onPress={() => {
              setToSendOTP(false);
            }}
            style={{ color: "#1e90ff" }}
          >
            Change details
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default OTPComponent;
