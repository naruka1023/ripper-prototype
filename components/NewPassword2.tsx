import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const NewPassword2 = () => {
  return (
    <View style={styles.newPassword2}>
      <View style={[styles.createNewPassword, styles.createLayout]}>
        <View style={[styles.createNewPasswordChild, styles.createLayout]} />
        <Text style={styles.createNewPassword1}>Create New Password</Text>
      </View>
      <View style={[styles.confirmPassword, styles.passwordLayout]}>
        <View
          style={[styles.confirmPasswordChild, styles.passwordChildLayout]}
        />
        <Image
          style={[styles.hideIcon, styles.hideIconLayout]}
          contentFit="cover"
          source={require("../assets/hide.png")}
        />
        <Text style={[styles.confirmPassword1, styles.passwordTypo]}>
          Confirm Password
        </Text>
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <View style={[styles.passwordChild, styles.passwordPosition]} />
        <Image
          style={[styles.hideIcon1, styles.hideIconLayout]}
          contentFit="cover"
          source={require("../assets/hide.png")}
        />
        <Text style={[styles.password1, styles.passwordPosition]}>
          Password
        </Text>
      </View>
      <Text style={[styles.yourNewPassword, styles.newFlexBox]}>
        Your new password must be different from previously used passwords.
      </Text>
      <Text style={[styles.newPassword, styles.newFlexBox]}>New Password</Text>
      <View style={[styles.previousPage, styles.previousLayout]}>
        <Image
          style={[styles.previousPageChild, styles.previousLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={styles.leftArrowIcon}
          contentFit="cover"
          source={require("../assets/left-arrow.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createLayout: {
    height: 47,
    width: 310,
    left: "50%",
    position: "absolute",
  },
  passwordLayout: {
    height: 74,
    width: 307,
    position: "absolute",
  },
  passwordChildLayout: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    height: 47,
  },
  hideIconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  passwordTypo: {
    height: 27,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  passwordPosition: {
    marginLeft: -153.5,
    width: 307,
    left: "50%",
    position: "absolute",
  },
  newFlexBox: {
    height: 32,
    left: 42,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    width: 310,
    position: "absolute",
  },
  previousLayout: {
    height: 42,
    width: 42,
    position: "absolute",
  },
  createNewPasswordChild: {
    marginLeft: -155,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorOrangered,
    top: 0,
  },
  createNewPassword1: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    left: 0,
    top: 0,
    height: 47,
    width: 310,
    position: "absolute",
  },
  createNewPassword: {
    marginLeft: -154.5,
    top: 515,
  },
  confirmPasswordChild: {
    marginTop: -10,
    width: 307,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  hideIcon: {
    marginTop: 1,
    left: 271,
    top: "50%",
  },
  confirmPassword1: {
    width: 307,
    top: "50%",
    left: 0,
    position: "absolute",
    marginTop: -37,
  },
  confirmPassword: {
    left: 45,
    top: "50%",
    marginTop: -37,
  },
  passwordChild: {
    top: 27,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    height: 47,
  },
  hideIcon1: {
    marginLeft: 117.5,
    top: 38,
    left: "50%",
  },
  password1: {
    height: 27,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 0,
  },
  password: {
    marginLeft: -151.5,
    top: 290,
    left: "50%",
  },
  yourNewPassword: {
    top: 209,
    color: Color.colorDimgray_100,
    left: 42,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  newPassword: {
    top: 151,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 42,
  },
  previousPageChild: {
    left: 0,
    height: 42,
    width: 42,
    top: 0,
  },
  leftArrowIcon: {
    top: 10,
    left: 10,
    width: 21,
    height: 21,
    position: "absolute",
  },
  previousPage: {
    top: 46,
    left: 45,
  },
  newPassword2: {
    backgroundColor: Color.colorWhite,
    width: 393,
    height: 852,
    overflow: "hidden",
  },
});

export default NewPassword2;
