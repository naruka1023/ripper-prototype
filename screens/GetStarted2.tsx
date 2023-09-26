import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import JoinForFree from "../components/JoinForFree";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const GetStarted2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.getStarted2, styles.getStarted2Layout]}>
      <View style={styles.maskGroup}>
        <Image
          style={[styles.backgroundKayakIcon, styles.getStarted2Layout]}
          contentFit="cover"
          source={require("../assets/background-kayak2.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.ripperTextWrapper}>
          <Image
            style={styles.ripperTextIcon}
            contentFit="cover"
            source={require("../assets/ripper-text.png")}
          />
        </View>
        <View style={[styles.phoneFrame, styles.sloganFlexBox]}>
          <View style={[styles.image23Wrapper, styles.sloganFlexBox]}>
            <Image
              style={styles.image23Icon}
              contentFit="cover"
              source={require("../assets/image-23.png")}
            />
          </View>
        </View>
        <View style={[styles.enticingText, styles.sloganFlexBox]}>
          <Text style={styles.findTheRight}>
            Find the right solutions for you
          </Text>
        </View>
        <View style={styles.splashIdentifier}>
          <View style={styles.splashIdentifier1}>
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-13.png")}
            />
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
          </View>
        </View>
        <View style={[styles.slogan, styles.sloganFlexBox]}>
          <Text style={[styles.tmrwIsToday, styles.signIn1Clr]}>
            TMRW IS TODAY
          </Text>
        </View>
        <JoinForFree joinForFreePosition="unset" />
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={[styles.signIn1, styles.signIn1Clr]}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  getStarted2Layout: {
    width: "100%",
    overflow: "hidden",
  },
  sloganFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  signIn1Clr: {
    color: Color.colorOrangered,
    textAlign: "center",
  },
  backgroundKayakIcon: {
    maxWidth: "100%",
    height: 475,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  maskGroup: {
    top: 0,
    left: -146,
    width: 650,
    zIndex: 0,
    position: "absolute",
    alignItems: "center",
  },
  ripperTextIcon: {
    top: 17,
    left: 0,
    height: 48,
    width: 262,
    position: "absolute",
  },
  ripperTextWrapper: {
    height: 80,
    width: 262,
  },
  image23Icon: {
    width: 188,
    height: 403,
    borderRadius: Border.br_mini,
  },
  image23Wrapper: {
    backgroundColor: Color.colorWhitesmoke_100,
    padding: Padding.p_8xs,
    borderRadius: Border.br_mini,
    zIndex: 0,
  },
  phoneFrame: {
    width: 198,
  },
  findTheRight: {
    fontSize: FontSize.size_5xl,
    color: Color.colorDimgray_200,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  enticingText: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_10xs,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
  },
  splashIdentifierChild: {
    width: 6,
    height: 6,
  },
  splashIdentifier1: {
    top: 16,
    left: 119,
    width: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
  },
  splashIdentifier: {
    width: 289,
    height: 31,
    overflow: "hidden",
  },
  tmrwIsToday: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.orbitronRegular,
  },
  slogan: {
    alignSelf: "stretch",
  },
  signIn1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorOrangered,
  },
  frameParent: {
    paddingTop: Padding.p_29xl,
    paddingBottom: Padding.p_5xl,
    zIndex: 1,
    marginTop: 10,
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  getStarted2: {
    borderRadius: Border.br_5xl,
    height: 852,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GetStarted2;
