import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Cross from "../icons/Cross";
import Heart from "../icons/Heart";
import Progress from "./Progress";
import { CROSS_SIZE } from "../icons/Cross";

const rowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    padding: 25,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    paddingLeft: 16,
  },
});

const Header = (props) => {
  return (
    <View>
      <View style={[styles.row,{width: rowWidth}]}>
        <Cross />
        <Progress long={props.long}/>
        <Heart />
      </View>
    </View>
  );
};

export default Header;