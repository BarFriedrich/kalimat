import * as React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import { CROSS_SIZE } from "../icons/Cross";
import { HEART_SIZE } from "../icons/Heart";

const barWidth = Dimensions.get("window").width - 16 * 6 - CROSS_SIZE - HEART_SIZE;

const ProgressBar = (props) => {
  const color = (parseFloat(props.long) > parseFloat("50%")) ? "#62b900" : "#ffd900";
  return (
    <View style={[styles.skillProgressContainer, {width: barWidth}, {marginTop: CROSS_SIZE/4}]}>
      <View style={[styles.skillProgressGreen, {backgroundColor: color}, { width: props.long }]}>
        <View style={styles.skillProgressShadow} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skillProgressContainer: {
    borderRadius: 98,
    height: 16,
    backgroundColor: '#e5e5e5',
  },
  skillProgressGreen: {
    opacity: 1,
    minWidth: 26,
    zIndex: 1,
    borderRadius: 98,
    height: 16,
  },
  skillProgressShadow: {
    backgroundColor: '#fff',
    borderRadius: 98,
    height: 10,
    marginRight: 10,
    marginLeft: 15,
    opacity: 0.2,
  },
});

export default ProgressBar;