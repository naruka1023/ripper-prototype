import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import PasswordFormSection from "../components/PasswordFormSection";
import ContainerWrapper from "../components/ContainerWrapper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <View style={[styles.signInParent, styles.signPosition]}>
        <Text style={[styles.signIn1, styles.signFlexBox1]}>Sign In</Text>
        <Text style={[styles.hiWelcomeBackContainer, styles.signFlexBox1]}>
          <Text style={styles.hiWelcomeBackContainer1}>
            <Text style={styles.hiWelcomeBackLetsGet}>
              <Text style={styles.hiWelcomeBack}>
                Hi, Welcome back, let’s get
              </Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
            <Text style={[styles.ripping, styles.email1Typo]}>Ripping</Text>
            <Text style={styles.text1}>!</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.email}>
        <Text style={[styles.email1, styles.email1Typo]}>Email</Text>
        <TextInput style={styles.emailChild} />
      </View>
      <PasswordFormSection />
      <View style={[styles.signInWith, styles.signFlexBox]}>
        <View style={styles.signInWithChild} />
        <Text style={[styles.orSignIn, styles.signFlexBox1]}>
          Or sign in with
        </Text>
        <View style={styles.signInWithChild} />
      </View>
      <ContainerWrapper />
      <TouchableOpacity
        style={[styles.signInInner, styles.signPosition]}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("LocationAccess")}
      >
        <View style={[styles.signInWrapper, styles.signFlexBox]}>
          <Text style={styles.signIn2}>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signPosition: {
    left: "50%",
    position: "absolute",
  },
  signFlexBox1: {
    height: 32,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  email1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  signFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  signIn1: {
    fontSize: FontSize.size_13xl,
    color: Color.colorGray,
    width: 310,
    height: 32,
    display: "flex",
    justifyContent: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  hiWelcomeBack: {
    color: Color.colorDimgray_100,
  },
  text: {
    color: Color.colorDimgray_200,
  },
  hiWelcomeBackLetsGet: {
    fontFamily: FontFamily.interRegular,
  },
  ripping: {
    color: Color.colorOrangered,
  },
  text1: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
  },
  hiWelcomeBackContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  hiWelcomeBackContainer: {
    fontSize: 19,
    marginTop: 15,
    width: 310,
    height: 32,
    display: "flex",
  },
  signInParent: {
    marginTop: -325,
    marginLeft: -155,
    height: 79,
    top: "50%",
    left: "50%",
  },
  email1: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    height: 27,
    width: 307,
  },
  emailChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 47,
    marginTop: 5,
    width: 307,
  },
  email: {
    marginTop: -198,
    right: 0,
    left: 0,
    alignItems: "center",
    top: "50%",
    position: "absolute",
  },
  signInWithChild: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderTopWidth: 1,
    width: 86,
    height: 1,
  },
  orSignIn: {
    fontSize: FontSize.size_base,
    width: 159,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    height: 32,
    display: "flex",
  },
  signInWith: {
    top: 595,
    left: 48,
    position: "absolute",
    flexDirection: "row",
  },
  signIn2: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  signInWrapper: {
    padding: Padding.p_3xs,
  },
  signInInner: {
    marginLeft: -144.5,
    top: 496,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered,
    paddingHorizontal: Padding.p_91xl,
    paddingVertical: 0,
    overflow: "hidden",
  },
  signIn: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignIn;
