import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

export default function Ballmove() {
  const translation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(translation, {
      toValue: 100,
      // duration: 3000,
      useNativeDriver: true,

      // easing: Easing.bounce,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        marginTop: 50,
        backgroundColor: 'red',
        transform: [{translateY: translation}],
      }}></Animated.View>
  );
}

const styles = StyleSheet.create({
  ballStyle: {
    height: 120,
    width: 120,
    backgroundColor: 'red',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 30,
  },
});
