import React, { useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Frame1 from "../components/Frame1";
import Frame4 from "../components/Frame4";
import Frame3 from "../components/Frame3";
import Frame2 from "../components/Frame2";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import { Border, Color } from "../GlobalStyles";

const GetStarted1 = () => {
  const [carouselItems, setCarouselItems] = useState([
    <Frame1 />,
    <Frame4 />,
    <Frame3 />,
    <Frame2 />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.getStarted1}>
      <View style={styles.carousel}>
        <Carousel
          style={styles.carousel1}
          width={359}
          mode="normal"
          autoPlay={true}
          loop={true}
          data={carouselItems}
          renderItem={({ item }) => item}
        />
      </View>
      <SectionCard />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel1: {
    width: 359,
    height: 662,
  },
  carousel: {
    alignSelf: "stretch",
    height: 662,
  },
  getStarted1: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    alignItems: "center",
  },
});

export default GetStarted1;
