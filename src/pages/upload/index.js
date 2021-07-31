import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Upload = () => {
  const camera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      res => {
        console.log(res);
      },
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={camera}>
        <Text>asdas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({});
