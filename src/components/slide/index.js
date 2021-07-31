import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {width} = Dimensions;

const Slide = ({label, right}) => {
  const [position, setPosition] = useState(false);

  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
      translateX: (right ? 1 : -1 * width) / 2,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, {transform}]}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  wrapper: {width},
  container: {
    backgroundColor: 'red',
    height: 100,
    justifyContent: 'center',
  },
  label: {
    fontSize: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 80,
  },
});
