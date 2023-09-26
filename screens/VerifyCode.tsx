import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const VerifyCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyCode}>
      <TouchableOpacity
        style={styles.verify}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("LocationAccess")}
      >
        <View style={styles.verifyChild} />
        <Text style={[styles.verify1, styles.textFlexBox]}>Verify</Text>
      </TouchableOpacity>
      <Text style={[styles.resendCode, styles.resendCodeTypo]}>
        Resend code
      </Text>
      <Text style={[styles.didntReceiveOtp, styles.verifyCode1FlexBox]}>
        Didn’t receive OTP?
      </Text>
      <View style={styles.digit1Parent}>
        <TextInput
          style={[styles.digit1, styles.digitTypo]}
          placeholder="8"
          placeholderTextColor="#000"
        />
        <View style={styles.digitLayout}>
          <TextInput style={[styles.digit2Child, styles.textLayout]} />
          <Text style={[styles.text, styles.textTypo]}>8</Text>
        </View>
        <TextInput
          style={[styles.digit3, styles.digitLayout]}
          placeholder="7"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.digit3, styles.digitLayout]}
          placeholder="3"
          placeholderTextColor="#000"
        />
      </View>
      <Text style={[styles.email, styles.textTypo]}>Email</Text>
      <Text style={[styles.joesmithgmailcom, styles.resendCodeTypo]}>
        joesmith@gmail.com
      </Text>
      <Text style={[styles.pleaseEneterThe, styles.verifyCode1FlexBox]}>
        Please eneter the code we just sent to email
      </Text>
      <Text style={[styles.verifyCode1, styles.digitTypo]}>Verify Code</Text>
      <TouchableOpacity
        style={[styles.previousPage, styles.previousLayout]}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("ConfirmAccount")}
      >
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
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    top: 0,
  },
  resendCodeTypo: {
    width: 222,
    textDecoration: "underline",
    right: 85,
    height: 27,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  verifyCode1FlexBox: {
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  digitTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textLayout: {
    width: 56,
    height: 47,
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  digitLayout: {
    marginLeft: 28,
    width: 56,
    height: 47,
  },
  previousLayout: {
    height: 42,
    width: 42,
    position: "absolute",
  },
  verifyChild: {
    marginLeft: -155,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorOrangered,
    top: 0,
    height: 47,
    width: 310,
    left: "50%",
    position: "absolute",
  },
  verify1: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    height: 47,
    width: 310,
    position: "absolute",
  },
  verify: {
    marginLeft: -154.5,
    top: 560,
    height: 47,
    left: "50%",
    width: 310,
    position: "absolute",
  },
  resendCode: {
    top: 506,
    color: Color.colorOrangered,
    height: 27,
  },
  didntReceiveOtp: {
    top: 456,
    left: 117,
    width: 159,
    color: Color.colorDimgray_100,
    height: 32,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  digit1: {
    width: 56,
    height: 47,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  digit2Child: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_200,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    width: 56,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    top: 0,
  },
  digit3: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  digit1Parent: {
    top: 362,
    flexDirection: "row",
    left: 45,
    position: "absolute",
  },
  email: {
    top: 335,
    textAlign: "left",
    width: 307,
    left: 45,
    height: 27,
  },
  joesmithgmailcom: {
    top: 241,
    color: "#19b0ff",
    height: 27,
  },
  pleaseEneterThe: {
    top: 197,
    left: 13,
    width: 367,
    color: Color.colorDimgray_100,
    height: 32,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  verifyCode1: {
    top: 142,
    left: 42,
    fontSize: FontSize.size_13xl,
    color: Color.colorGray,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 310,
  },
  previousPageChild: {
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
  },
  verifyCode: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default VerifyCode;
