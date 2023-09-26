import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import JoinForFree from "./JoinForFree";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SectionCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sloganParent, styles.sloganFlexBox]}>
      <View style={[styles.slogan, styles.sloganFlexBox]}>
        <Text style={[styles.tmrwIsToday, styles.signIn1FlexBox]}>
          TMRW IS TODAY
        </Text>
      </View>
      <JoinForFree
        joinForFreePosition="unset"
        onJoinForFreePress={() => navigation.navigate("CreateAccount")}
      />
      <Pressable onPress={() => navigation.navigate("SignIn")}>
        <Text style={[styles.signIn1, styles.signIn1FlexBox]}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sloganFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  signIn1FlexBox: {
    textAlign: "center",
    color: Color.colorOrangered,
  },
  tmrwIsToday: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.orbitronRegular,
  },
  slogan: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signIn1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  sloganParent: {
    height: 180,
    justifyContent: "space-between",
    paddingBottom: Padding.p_5xl,
    marginTop: 10,
  },
});

export default SectionCard;
