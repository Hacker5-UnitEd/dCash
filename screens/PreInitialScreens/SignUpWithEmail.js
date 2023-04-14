import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Link } from "@react-navigation/native";
import { checkValidEmail } from "../../utils/utils";
import OTPComponent from "./OTPComponent";

const SignUpWithEmail = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const [toSendOTP, setToSendOTP] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  return !fontsLoaded ? (
    <></>
  ) : toSendOTP ? (
    <OTPComponent
      password={password}
      email={email}
      confPassword={confPassword}
    />
  ) : (
    <View className="flex bg-[#1a1a1a] flex-grow">
      <View className="flex px-[35] pt-5 mt-[100]">
        <View
          className={
            "bg-[#1a1a1a] border-2 border-[" +
            (emailValid || email == "" ? "#ffffff" : "#e11717") +
            "] rounded-full py-4 px-5"
          }
        >
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#888888"
            className="text-white"
            onChangeText={(_email) => {
              setEmail(_email);
              setEmailValid(checkValidEmail(_email));
            }}
          />
        </View>
        <View className="bg-[#1a1a1a] border-2 border-[#ffffff] rounded-full py-4 px-5 mt-10">
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"#888888"}
            className="text-white"
            onChangeText={(_password) => {
              setPassword(_password);
            }}
          />
        </View>
        <View
          className={
            "bg-[#1a1a1a] border-2 border-[" +
            (confPassword == "" || passwordsMatch ? "#ffffff" : "#ff0000") +
            "] rounded-full py-4 px-5 mt-10"
          }
        >
          <TextInput
            secureTextEntry={true}
            placeholder="Confirm Password"
            placeholderTextColor={"#888888"}
            className="text-white"
            onChangeText={(_confPassword) => {
              setConfPassword(_confPassword);
              setPasswordsMatch(password == _confPassword);
            }}
          />
        </View>
      </View>

      <View className="flex flex-row px-[35] pt-16 w-auto">
        <TouchableOpacity
          className={
            "flex-grow flex bg-[" +
            (!passwordsMatch || !emailValid ? "#394551" : "#1e90ff") +
            "] text-white font-bold py-5 px-4 rounded-full"
          }
          onPress={() => {
            setToSendOTP(true);
          }}
          disabled={!passwordsMatch || !emailValid}
        >
          <Text
            className="text-white mx-auto text-lg"
            style={{ fontFamily: "Inter_900Black" }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex px-[35] pt-10 w-auto">
        <Text
          className="text-white text-lg"
          style={{ fontFamily: "Inter_900Black" }}
        >
          Have an account?{" "}
          <Link
            to={{ screen: "EmailSignIn", params: {} }}
            style={{ color: "#1e90ff" }}
          >
            Sign In!
          </Link>
        </Text>
        <Text
          className="text-white mt-3 text-lg"
          style={{ fontFamily: "Inter_900Black" }}
        >
          <Link
            to={{ screen: "Continue", params: {} }}
            style={{ color: "#1e90ff" }}
          >
            Sign In
          </Link>{" "}
          another way.
        </Text>
      </View>
    </View>
  );
};

export default SignUpWithEmail;
