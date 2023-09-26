import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const ContainerWrapper = () => {
  return (
    <View style={styles.signInInner}>
      <View style={styles.appleParent}>
        <View style={styles.appleLayout}>
          <Image
            style={[styles.appleChild, styles.appleLayout]}
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
            style={[styles.appleChild, styles.appleLayout]}
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
            style={[styles.appleChild, styles.appleLayout]}
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
            style={[styles.appleChild, styles.appleLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  appleLayout: {
    height: 62,
    width: 62,
  },
  iconPosition: {
    height: 21,
    top: 20,
    position: "absolute",
  },
  appleChild: {
    top: 0,
    left: 0,
    position: "absolute",
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
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  signInInner: {
    top: 668,
    left: 37,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
});

export default ContainerWrapper;
