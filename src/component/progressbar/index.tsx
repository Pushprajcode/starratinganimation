import {StyleSheet, View, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Stop,
  Image,
} from 'react-native-svg';

export default function ProgressBarComponent({percentage, image}) {
  const AnimatedCirle = Animated.createAnimatedComponent(Circle);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const data = {
    percentage: percentage,
    radius: 50,
    strokwidth: 8,
    color: '#81a5e3',
    delay: 0,
    max: 100,
  };
  const circleRef = useRef();
  const halfCircle = data.radius + data.strokwidth;
  const circleCirumfrence = 2 * Math.PI * data.radius;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const strokeDashoffset =
    circleCirumfrence - (circleCirumfrence * data.percentage) / 100;
  return (
    <View style={styles.mainViewStyle}>
      <Svg
        style={styles.svgStyle}
        width={data.radius * 2}
        height={data.radius * 2}
        viewBox={`0 0  ${halfCircle * 2} ${halfCircle * 2}`}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#eb5778" stopOpacity="1" />
            <Stop offset="1" stopColor="#7646e4" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <G rotation={'-180'} origin={`${halfCircle}`}>
          <Circle
            cx={'50%'}
            cy={'50%'}
            stroke={data.color}
            strokeWidth={data.strokwidth}
            r={data.radius}
            fill={'transparent'}
            strokeOpacity={0.2}></Circle>
          <AnimatedCirle
            cx={'50%'}
            cy={'50%'}
            stroke={'url(#grad)'}
            strokeWidth={data.strokwidth}
            r={data.radius}
            strokeOpacity={1}
            strokeDasharray={circleCirumfrence}
            strokeDashoffset={animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [circleCirumfrence, strokeDashoffset],
            })}
            strokeLinecap={'round'}
            ref={circleRef}
          />
          <AnimatedCirle />
        </G>
        <Image
          href={image}
          height={40}
          width={40}
          x={halfCircle / 1.5}
          y={halfCircle / 1.5}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {},
  textStylecircleView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  moneybagStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: '#c5ab63',
  },
  textStyleMoney: {
    fontSize: 50,
    color: '#6d4fca',
    fontWeight: '700',
    marginTop: 4,
  },
  innerView: {
    backgroundColor: '#e8e4f5',
    flex: 0.8,
    marginTop: 'auto',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  svgStyle: {
    alignSelf: 'center',
  },
  carImgStyle: {
    height: 40,
    width: 40,
    borderWidth: 1,
    backgroundColor: '#e8e4f5',
    borderRadius: 16,
    borderColor: 'blue',
    resizeMode: 'contain',
  },

  textStyle: {
    fontSize: 50,
    fontWeight: '600',
    color: '#000000',
  },
  tranferText: {
    color: 'grey',
    fontSize: 13,
  },
  rsText: {
    color: '#5d38e0',
  },
  uberRate: {
    color: 'red',
    fontSize: 14,
  },
  cashback: {marginRight: 22},
  uberText: {
    marginRight: 120,
  },
  dateText: {
    right: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
