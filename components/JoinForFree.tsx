import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type JoinForFreeType = {
  /** Style props */
  joinForFreePosition?: string;

  /** Action props */
  onJoinForFreePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const JoinForFree = ({
  joinForFreePosition,
  onJoinForFreePress,
}: JoinForFreeType) => {
  const joinForFreeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", joinForFreePosition),
    };
  }, [joinForFreePosition]);

  return (
    <View
      style={[styles.joinForFree, joinForFreeStyle]}
      onPress={onJoinForFreePress}
    >
      <Text style={styles.joinForFree1}>Join for free</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  joinForFree1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  joinForFree: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorOrangered,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_69xl,
    paddingVertical: Padding.p_xs,
  },
});

export default JoinForFree;
