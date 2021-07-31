import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Text style={{color: 'white'}}>aldooolkje</Text>
      <LottieView
        source={require('../../assets/lottie/splash.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
  },
});
