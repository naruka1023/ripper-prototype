import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const NewPassword = () => {
  return (
    <View style={styles.newPassword}>
      <View style={[styles.createNewPassword, styles.createLayout]}>
        <View style={[styles.createNewPasswordChild, styles.createLayout]} />
        <Text style={styles.createNewPassword1}>Create New Password</Text>
      </View>
      <View style={[styles.confirmPassword, styles.passwordLayout]}>
        <View style={[styles.confirmPasswordChild, styles.confirmPosition]} />
        <Image
          style={styles.hideIcon}
          contentFit="cover"
          source={require("../assets/hide.png")}
        />
        <Text style={[styles.confirmPassword1, styles.passwordTypo]}>
          Confirm Password
        </Text>
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <View style={[styles.confirmPasswordChild, styles.confirmPosition]} />
        <Image
          style={styles.hideIcon}
          contentFit="cover"
          source={require("../assets/hide.png")}
        />
        <Text style={[styles.confirmPassword1, styles.passwordTypo]}>
          Password
        </Text>
      </View>
      <Text style={[styles.yourNewPassword, styles.newFlexBox]}>
        Your new password must be different from previously used passwords.
      </Text>
      <Text style={[styles.newPassword1, styles.newFlexBox]}>New Password</Text>
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
    width: 310,
    left: "50%",
    height: 47,
    position: "absolute",
  },
  passwordLayout: {
    height: 74,
    width: 307,
    left: 45,
    position: "absolute",
  },
  confirmPosition: {
    width: 307,
    left: 0,
    position: "absolute",
  },
  passwordTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    height: 47,
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
    height: 47,
  },
  confirmPasswordChild: {
    top: 27,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 47,
  },
  hideIcon: {
    top: 38,
    left: 271,
    width: 25,
    height: 25,
    position: "absolute",
  },
  confirmPassword1: {
    color: Color.colorBlack,
    textAlign: "left",
    height: 27,
    fontSize: FontSize.size_base,
    width: 307,
    left: 0,
    position: "absolute",
    top: 0,
  },
  confirmPassword: {
    top: 389,
  },
  password: {
    top: 290,
  },
  yourNewPassword: {
    top: 209,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    left: 42,
  },
  newPassword1: {
    top: 151,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  previousPageChild: {
    height: 42,
    width: 42,
    left: 0,
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
    height: 42,
    width: 42,
  },
  newPassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default NewPassword;
