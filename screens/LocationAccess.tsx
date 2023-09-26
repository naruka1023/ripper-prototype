import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LocationAccess = () => {
  return (
    <View style={styles.locationAccess}>
      <Text style={styles.whatIsYour}>What is your Location?</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.allowLocationAccess, styles.locationTypo]}>
          Allow Location Access
        </Text>
      </View>
      <Text style={[styles.enterLocationManually, styles.locationTypo]}>
        Enter Location Manually
      </Text>
      <Image
        style={styles.locationAccessChild}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    top: 0,
    height: 47,
    width: 310,
  },
  locationTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  whatIsYour: {
    top: 90,
    left: 42,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray,
    height: 32,
    width: 310,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -155,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorOrangered,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  allowLocationAccess: {
    left: 0,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    top: 0,
    height: 47,
    width: 310,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
  },
  rectangleParent: {
    marginLeft: -154.5,
    top: 486,
    height: 47,
    left: "50%",
    width: 310,
    position: "absolute",
  },
  enterLocationManually: {
    top: 555,
    right: 85,
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    color: Color.colorOrangered,
    width: 222,
    height: 27,
  },
  locationAccessChild: {
    top: 195,
    left: 81,
    width: 231,
    height: 231,
    position: "absolute",
  },
  locationAccess: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default LocationAccess;
