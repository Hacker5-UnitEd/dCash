import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ContinueScreen from "./screens/PreInitialScreens/ContinueScreen";
import SignInWithEmail from "./screens/PreInitialScreens/SignInWithEmail";
import SignUpWithEmail from "./screens/PreInitialScreens/SignUpWithEmail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View className="flex-1 bg-[#1a1a1a]">
      <SafeAreaView className="flex-1 mt-10">
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Continue">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Continue" component={ContinueScreen} />
            <Stack.Screen name="EmailSignIn" component={SignInWithEmail} />
            <Stack.Screen name="EmailSignUp" component={SignUpWithEmail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
