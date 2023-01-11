import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
export default () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);

  const inputRange = [0, 10, 20, 40, 50, 60];
  const outputRange = ['green', 'blue', 'yellow', 'green', 'blue', 'yellow'];
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: translation.interpolate({
          inputRange,
          outputRange,
        }),
        // opacity: translation.interpolate({
        //   inputRange: [0, 100],
        //   outputRange: [0, 1],
        // }),
        // opacity: translation.interpolate({
        //   inputRange: [0, 50, 100],
        //   outputRange: [0, 1, 0],
        // }),
        // transform: [{translateY: translation}],
        transform: [
          {translateX: translation},
          {
            rotate: translation.interpolate({
              inputRange: [0, 10, 30],
              outputRange: ['0deg', '180deg', '360deg'],
            }),
          },
        ],
      }}
    />
  );
};
