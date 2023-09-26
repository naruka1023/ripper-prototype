import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ConfirmAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmAccount}>
      <Text style={styles.confirmAccount1}>Confirm Account</Text>
      <TouchableOpacity
        style={styles.confirmAccountInner}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("VerifyCode")}
      >
        <View style={styles.signUpWrapper}>
          <Text style={styles.signUp}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.fillYourInformation, styles.orSignUpTypo]}>
        Fill your information below or register with your social account.
      </Text>
      <Text style={[styles.orSignUp, styles.orSignUpTypo]}>
        Or sign up with
      </Text>
      <TextInput style={[styles.confirmAccountChild, styles.confirmLayout]} />
      <Text style={[styles.email, styles.nameLayout]}>Email</Text>
      <TextInput style={[styles.confirmAccountItem, styles.confirmLayout]} />
      <Text style={[styles.name, styles.nameLayout]}>Name</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.confirmAccountChild1, styles.lineViewLayout]} />
      <View style={styles.appleParent}>
        <View style={styles.appleLayout}>
          <Image
            style={[styles.appleChild, styles.signInPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.appleIcon}
            contentFit="cover"
            source={require("../assets/apple.png")}
          />
        </View>
        <View style={[styles.google, styles.appleLayout]}>
          <Image
            style={[styles.appleChild, styles.signInPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.googleIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/google.png")}
          />
        </View>
        <View style={[styles.google, styles.appleLayout]}>
          <Image
            style={[styles.appleChild, styles.signInPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.image21Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-21.png")}
          />
        </View>
        <View style={[styles.google, styles.appleLayout]}>
          <Image
            style={[styles.appleChild, styles.signInPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.tikTokIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/tik-tok.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.signIn, styles.signInPosition]}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={[styles.signIn1, styles.nameLayout]}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  orSignUpTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  confirmLayout: {
    height: 47,
    width: 307,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  nameLayout: {
    height: 27,
    fontSize: FontSize.size_base,
  },
  lineViewLayout: {
    height: 1,
    width: 86,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    top: 615,
    position: "absolute",
  },
  signInPosition: {
    left: 0,
    position: "absolute",
  },
  appleLayout: {
    height: 62,
    width: 62,
  },
  iconPosition: {
    height: 21,
    top: 20,
    position: "absolute",
  },
  confirmAccount1: {
    top: 46,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray,
    height: 32,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 310,
    alignItems: "center",
    textAlign: "center",
    left: 42,
    position: "absolute",
  },
  signUp: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  signUpWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  confirmAccountInner: {
    marginLeft: -159.5,
    top: 517,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered,
    paddingHorizontal: Padding.p_91xl,
    paddingVertical: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  fillYourInformation: {
    top: 99,
    width: 310,
    left: 42,
    fontSize: FontSize.size_base,
  },
  orSignUp: {
    top: 599,
    left: 119,
    width: 159,
  },
  confirmAccountChild: {
    top: 288,
    left: 45,
    width: 307,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
  },
  email: {
    top: 261,
    textAlign: "left",
    color: Color.colorBlack,
    height: 27,
    width: 307,
    left: 45,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  confirmAccountItem: {
    marginLeft: -151.5,
    top: 195,
    left: "50%",
  },
  name: {
    top: 168,
    textAlign: "left",
    color: Color.colorBlack,
    height: 27,
    width: 307,
    left: 45,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  lineView: {
    left: 47,
  },
  confirmAccountChild1: {
    left: 269,
  },
  appleChild: {
    top: 0,
    height: 62,
    width: 62,
  },
  appleIcon: {
    top: 18,
    left: 20,
    width: 22,
    height: 25,
    position: "absolute",
  },
  googleIcon: {
    left: 12,
    width: 37,
    height: 21,
    top: 20,
  },
  google: {
    marginLeft: 20,
  },
  image21Icon: {
    left: 25,
    width: 11,
    height: 21,
    top: 20,
  },
  tikTokIcon: {
    left: 13,
    width: 37,
    height: 21,
    top: 20,
  },
  appleParent: {
    top: 663,
    left: 47,
    flexDirection: "row",
    position: "absolute",
  },
  signIn1: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorOrangered,
    width: 393,
    height: 27,
    textAlign: "center",
  },
  signIn: {
    top: 789,
  },
  confirmAccount: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default ConfirmAccount;
