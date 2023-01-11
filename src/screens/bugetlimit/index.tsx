import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import LOCAL_IMAGES from '../../utils/localImages';
import LOCAL_STRINGS from '../../utils/localstrings';
import ProgressBarComponent from '../../component/progressbar';
import HorizontalProgressBarComponent from '../../component/progressbar/horizontalprogress';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log('--->', windowHeight); //844
console.log('--->', windowWidth); //399

export default function BugetLimit() {
  return (
    <View style={styles.mainView}>
      <View style={styles.bugetLimitView}></View>
      <View style={styles.goodJobView}>
        <View style={{flexDirection: 'row'}}>
          <Image source={LOCAL_IMAGES.FOOD_IMAGE} style={styles.foodImage} />
          <View>
            <Text>{LOCAL_STRINGS.FOOD_DRINK}</Text>
            <Text>{LOCAL_STRINGS.RATE}</Text>
          </View>
        </View>
        <HorizontalProgressBarComponent />
        <Text>{'Spen $750 from $1500'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  bugetLimitView: {
    height: windowHeight / 2,
    backgroundColor: 'blue',
    borderRadius: 25,
    marginTop: 20,
  },
  goodJobView: {
    height: windowHeight / 3.6,
    backgroundColor: '#ff0fff',
    borderRadius: 25,
    marginBottom: 'auto',
    bottom: 200,
    width: windowWidth / 1.1,
    marginHorizontal: 13,
  },
  foodImage: {
    height: 30,
    width: 30,
  },
  overSpendingbView: {
    height: windowHeight / 3.5,
    backgroundColor: '#ff0fff',
    borderRadius: 25,
    width: windowWidth / 1.1,
    marginHorizontal: 13,
    bottom: 30,
  },
});
