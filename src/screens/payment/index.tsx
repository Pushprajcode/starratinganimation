import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Svg, {Circle, Defs, G, LinearGradient, Stop} from 'react-native-svg';

export default function ExpensesScreen() {
  const AnimatedCirle = Animated.createAnimatedComponent(Circle);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const data = {
    percentage: 69,
    radius: 90,
    strokwidth: 20,
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
          <View style={styles.textStylecircleView}>
            <Image
              style={styles.moneybagStyle}
              source={require('../../images/money-bag.png')}
            />
            <Text style={styles.textStyleMoney}>$2,345</Text>
          </View>
        </Defs>
        <G rotation={'-90'} origin={`${halfCircle}`}>
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
      </Svg>

      <View style={styles.innerView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 9,
            marginTop: 60,
          }}>
          <Image
            style={styles.carImgStyle}
            source={require('../../images/cashback.png')}
          />
          <View style={styles.cashback}>
            <Text style={styles.textStyle}>{'Recieved cashback'}</Text>
            <Text style={styles.tranferText}>{'Tranfered money'}</Text>
          </View>
          <View>
            <Text style={styles.rsText}>{'+ $20.00'}</Text>
            <Text>{'12 March 2021'}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 60,
            marginHorizontal: 9,
          }}>
          <Image
            style={styles.carImgStyle}
            source={require('../../images/car.png')}
          />
          <View style={styles.uberText}>
            <Text style={styles.textStyle}>{'Uber'}</Text>
            <Text style={styles.tranferText}>{'Taxi service'}</Text>
          </View>
          <View>
            <Text style={styles.uberRate}>{'- $7.50'}</Text>
            <Text>{'6 March 2021'}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            marginHorizontal: 9,
          }}>
          <Image
            style={styles.carImgStyle}
            source={require('../../images/burger.png')}
          />
          <View style={styles.uberText}>
            <Text style={styles.textStyle}>{'Morimoto'}</Text>
            <Text style={styles.tranferText}>{'Food & Drink'}</Text>
          </View>
          <View>
            <Text style={styles.uberRate}>{'- $54.50'}</Text>
            <Text style={styles.dateText}>{'1 March 2021'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: '#fefdfe',
    flex: 1,
  },
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
    fontSize: 20,
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
    marginTop: 70,
    marginLeft: 120,
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
    fontSize: 20,
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
