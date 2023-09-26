const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignIn from "./screens/SignIn";
import JoinForFree from "./components/JoinForFree";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame1 from "./components/Frame1";
import GetStarted1 from "./screens/GetStarted1";
import ConfirmAccount from "./screens/ConfirmAccount";
import NewPassword2 from "./components/NewPassword2";
import LocationAccess from "./screens/LocationAccess";
import NewPassword from "./screens/NewPassword";
import VerifyCode from "./screens/VerifyCode";
import CreateAccount from "./screens/CreateAccount";
import GetStarted4 from "./screens/GetStarted4";
import GetStarted3 from "./screens/GetStarted3";
import GetStarted2 from "./screens/GetStarted2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Orbitron-Regular": require("./assets/fonts/Orbitron-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame2"
                component={Frame2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame3"
                component={Frame3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame4"
                component={Frame4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame1"
                component={Frame1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GetStarted1"
                component={GetStarted1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ConfirmAccount"
                component={ConfirmAccount}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LocationAccess"
                component={LocationAccess}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewPassword"
                component={NewPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VerifyCode"
                component={VerifyCode}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GetStarted4"
                component={GetStarted4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GetStarted3"
                component={GetStarted3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GetStarted2"
                component={GetStarted2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
