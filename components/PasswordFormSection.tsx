import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PasswordFormSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.passwordParent}>
      <View>
        <View>
          <Text style={[styles.password1, styles.passwordLayout]}>
            Password
          </Text>
        </View>
        <View>
          <View style={styles.rectangleWrapper}>
            <TextInput style={styles.frameChild} secureTextEntry={true} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.forgotPassword}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("NewPassword")}
      >
        <Text style={[styles.forgotPassword1, styles.passwordLayout]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordLayout: {
    height: 27,
    textAlign: "left",
    width: 307,
  },
  password1: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 47,
    width: 307,
  },
  rectangleWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  forgotPassword1: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    color: Color.colorOrangered,
  },
  forgotPassword: {
    marginTop: 10,
  },
  passwordParent: {
    position: "absolute",
    marginTop: -85,
    marginLeft: -196,
    top: "50%",
    left: "50%",
    width: 392,
    alignItems: "center",
  },
});

export default PasswordFormSection;
