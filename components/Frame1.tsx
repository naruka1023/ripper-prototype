import * as React from "react";
import { View, StyleProp, ViewStyle, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

type Frame1Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame1 = ({ style }: Frame1Type) => {
  return (
    <View style={[styles.frame1, style]}>
      <Image
        style={styles.backgroundKayakIcon}
        contentFit="cover"
        source={require("../assets/background-kayak1.png")}
      />
      <View style={styles.maskGroup} />
      <View style={styles.frameParent}>
        <View style={styles.ripperTextWrapper}>
          <Image
            style={styles.ripperTextIcon}
            contentFit="cover"
            source={require("../assets/ripper-text.png")}
          />
        </View>
        <View style={[styles.phoneFrame, styles.phoneFrameFlexBox]}>
          <View style={[styles.image23Wrapper, styles.phoneFrameFlexBox]}>
            <Image
              style={styles.image23Icon}
              contentFit="cover"
              source={require("../assets/image-23.png")}
            />
          </View>
        </View>
        <View style={[styles.enticingText, styles.phoneFrameFlexBox]}>
          <Text style={styles.findTheRight}>
            Find the right solutions for you
          </Text>
        </View>
        <View style={styles.splashIdentifier}>
          <View style={styles.splashIdentifier1}>
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneFrameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundKayakIcon: {
    maxWidth: "100%",
    height: 475,
    width: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  maskGroup: {
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
  },
  ripperTextIcon: {
    top: 17,
    left: 0,
    height: 48,
    position: "absolute",
    width: 262,
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
    zIndex: 0,
    borderRadius: Border.br_mini,
  },
  phoneFrame: {
    width: 198,
    marginTop: 25,
  },
  findTheRight: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    textAlign: "center",
  },
  enticingText: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_10xs,
    marginTop: 25,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  splashIdentifierChild: {
    width: 6,
    height: 6,
  },
  splashIdentifier1: {
    top: 16,
    left: 119,
    width: 52,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  splashIdentifier: {
    width: 289,
    height: 31,
    marginTop: 25,
    overflow: "hidden",
  },
  frameParent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: Padding.p_29xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frame1: {
    width: 359,
    height: 662,
    alignItems: "center",
  },
});

export default Frame1;
