import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaView, View } from "react-native";
import ContinueScreen from "./screens/ContinueScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View className="flex-1 bg-[#1a1a1a]">
      <SafeAreaView className="flex-1 mt-10">
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Continue">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Continue" component={ContinueScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
