import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createAccount}>
      <View style={styles.createAccountParent}>
        <Text style={styles.createAccount1}>Create Account</Text>
        <Text style={[styles.fillYourInformation, styles.orSignInTypo]}>
          Fill your information below or register with your social account.
        </Text>
      </View>
      <View style={styles.nameParent}>
        <Text style={[styles.name, styles.nameLayout]}>Name</Text>
        <TextInput style={styles.frameChild} />
      </View>
      <View style={styles.emailParent}>
        <Text style={[styles.name, styles.nameLayout]}>Email</Text>
        <TextInput style={styles.frameChild} />
      </View>
      <View style={styles.passwordParent}>
        <Text style={[styles.name, styles.nameLayout]}>Password</Text>
        <TextInput style={styles.frameChild} secureTextEntry={true} />
      </View>
      <TouchableOpacity
        style={[styles.createAccountInner, styles.appleParentSpaceBlock]}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("ConfirmAccount")}
      >
        <View style={styles.signUpWrapper}>
          <Text style={styles.signTypo}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={[styles.signUp1, styles.signUp1Position]}>Sign Up</Text>
      </View>
      <View style={[styles.signInWithWrapper, styles.appleParentSpaceBlock]}>
        <View style={styles.signInWith}>
          <View style={styles.signInWithChild} />
          <Text style={[styles.orSignIn, styles.orSignInTypo]}>
            Or sign in with
          </Text>
          <View style={styles.signInWithChild} />
        </View>
      </View>
      <View style={[styles.appleParent, styles.appleParentSpaceBlock]}>
        <View style={styles.appleLayout}>
          <Image
            style={[styles.appleChild, styles.appleLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Image
            style={[styles.appleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/apple1.png")}
          />
        </View>
        <View style={[styles.google, styles.appleLayout]}>
          <Image
            style={[styles.appleChild, styles.appleLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Image
            style={[styles.googleIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/google1.png")}
          />
        </View>
        <View style={[styles.google, styles.appleLayout]}>
          <Image
            style={[styles.appleChild, styles.appleLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Image
            style={[styles.image21Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-211.png")}
          />
        </View>
        <View style={[styles.google, styles.appleLayout]}>
          <Image
            style={[styles.appleChild, styles.appleLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Image
            style={[styles.tikTokIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/tik-tok1.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signIn}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={[styles.signIn1, styles.nameLayout]}>Sign In</Text>
      </TouchableOpacity>
      <Image
        style={[styles.hideIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/hide.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orSignInTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    height: 32,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  nameLayout: {
    height: 27,
    fontSize: FontSize.size_base,
  },
  appleParentSpaceBlock: {
    paddingVertical: 0,
    marginTop: 25,
  },
  signUp1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  appleLayout: {
    height: 62,
    width: 62,
  },
  iconLayout1: {
    height: 25,
    position: "absolute",
  },
  iconPosition: {
    height: 21,
    top: 20,
    position: "absolute",
  },
  createAccount1: {
    fontSize: FontSize.size_13xl,
    color: Color.colorGray,
    height: 32,
    width: 310,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignItems: "center",
  },
  fillYourInformation: {
    marginTop: 13,
    width: 310,
  },
  createAccountParent: {
    height: 83,
    zIndex: 9,
    alignItems: "center",
  },
  name: {
    color: Color.colorBlack,
    textAlign: "left",
    width: 307,
    height: 27,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_200,
    marginTop: 5,
    height: 47,
    width: 307,
  },
  nameParent: {
    zIndex: 8,
    marginTop: 25,
    alignItems: "center",
  },
  emailParent: {
    zIndex: 7,
    marginTop: 25,
    alignItems: "center",
  },
  passwordParent: {
    zIndex: 6,
    marginTop: 25,
    alignItems: "center",
  },
  signTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  signUpWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  createAccountInner: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered,
    overflow: "hidden",
    paddingHorizontal: Padding.p_91xl,
    zIndex: 5,
  },
  signUp1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    height: 47,
    width: 310,
    justifyContent: "center",
    display: "flex",
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  signUpContainer: {
    zIndex: 4,
    height: 47,
    marginTop: 25,
    width: 310,
  },
  signInWithChild: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderTopWidth: 1,
    width: 86,
    height: 1,
  },
  orSignIn: {
    width: 159,
  },
  signInWith: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInWithWrapper: {
    paddingHorizontal: Padding.p_29xl,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  appleChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  appleIcon: {
    top: 18,
    left: 20,
    width: 22,
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
    flexWrap: "wrap",
    alignItems: "flex-end",
    paddingHorizontal: 41,
    zIndex: 2,
    width: 393,
    flexDirection: "row",
    justifyContent: "center",
  },
  signIn1: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorOrangered,
    width: 393,
    textAlign: "center",
    height: 27,
  },
  signIn: {
    zIndex: 1,
    marginTop: 25,
  },
  hideIcon: {
    top: 398,
    left: 316,
    width: 25,
    zIndex: 0,
  },
  createAccount: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    paddingHorizontal: 0,
    paddingVertical: 37,
    alignItems: "center",
  },
});

export default CreateAccount;
