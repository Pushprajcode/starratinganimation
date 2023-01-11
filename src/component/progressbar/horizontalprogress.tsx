import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import COLORS from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

export default function horizontalprogress() {
  const leftValue = useRef(new Animated.Value(0)).current;

  // percentage = 50%; width = 155
  useEffect(() => {
    Animated.timing(leftValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: COLORS.GREY,
        borderRadius: 20,
        height: 30,
        width: 310,
        marginBottom: 'auto',
        alignSelf: 'center',
        // alignItems: 'flex-start',
        marginTop: 70,
        // overflow: 'hidden',
      }}>
      <AnimatedGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#33b3ea', '#dc9ee6', '#ec5675']}
        style={[
          styles.linear,
          {
            transform: [
              {
                scaleX: leftValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          },
        ]}>
        {/* <Text>{'$750'}</Text> */}
      </AnimatedGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  linear: {
    height: 30,
    width: 200,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 18,
  },
});
