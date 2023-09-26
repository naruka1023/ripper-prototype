import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

type Frame3Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame3 = ({ style }: Frame3Type) => {
  return (
    <View style={[styles.frame3, style]}>
      <Image
        style={styles.paraRunIcon}
        contentFit="cover"
        source={require("../assets/para-run.png")}
      />
      <View style={styles.maskGroup}>
        <View style={[styles.maskGroupChild, styles.maskGroupChildFlexBox]} />
      </View>
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
          <Text style={styles.aPlatformFor}>A platform for every sport</Text>
        </View>
        <View style={styles.splashIdentifier}>
          <View
            style={[styles.splashIdentifier1, styles.maskGroupChildFlexBox]}
          >
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={styles.splashIdentifierChild}
              contentFit="cover"
              source={require("../assets/ellipse-12.png")}
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
  maskGroupChildFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  phoneFrameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  paraRunIcon: {
    maxWidth: "100%",
    height: 475,
    width: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  maskGroupChild: {
    top: 0,
    zIndex: 0,
    left: 0,
    alignItems: "center",
  },
  maskGroup: {
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
  },
  ripperTextIcon: {
    top: 17,
    height: 48,
    width: 262,
    left: 0,
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
    marginTop: 25,
  },
  aPlatformFor: {
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
  frame3: {
    width: 359,
    height: 662,
    alignItems: "center",
  },
});

export default Frame3;
