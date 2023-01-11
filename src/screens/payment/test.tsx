import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LOCAL_STRINGS from '../../utils/localstrings';
import COLORS from '../../utils/colors';
import LOCAL_IMAGES from '../../utils/localImages';
import ProgressBarComponent from '../../component/progressbar';

const DATA = [
  {
    CATEGORY: 'Food & Drink',
    MONEY: '$1500/month',
    IMAGES: require('../../images/burger.png'),
    PERCENTAGE: 50,
  },
  {
    CATEGORY: 'House Rent ',
    MONEY: '$750/month',
    IMAGES: require('../../images/house.png'),
    PERCENTAGE: 100,
  },
  {
    CATEGORY: 'car fuel ',
    MONEY: '$300/month',
    IMAGES: require('../../images/sportcar.png'),
    PERCENTAGE: 100,
  },
  {
    CATEGORY: 'Spa & Relax ',
    MONEY: '$250/month',
    PERCENTAGE: 30,
    IMAGES: require('../../images/girl.png'),
  },
];
export default function SummeryScreen() {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemListView}>
        <View>
          <ProgressBarComponent
            percentage={item.PERCENTAGE}
            image={item.IMAGES}
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.categoryTextStyel}>{item.CATEGORY}</Text>
          <Text style={styles.rsText}>{item.MONEY}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.containerView}>
      <LinearGradient
        colors={['#f25f85', '#7b87f5']}
        style={[styles.familyCard]}>
        <View>
          <Text style={styles.familyText}>{LOCAL_STRINGS.FAMILY_CARD}</Text>
          <Text style={styles.moneyText}>{LOCAL_STRINGS.MONEY}</Text>
          <View style={styles.dotView}>
            <Text style={styles.dotText}>{'....  ....  ....'}</Text>
            <Text style={styles.numberText}>{'4583'}</Text>
          </View>
        </View>
        <View style={styles.imageView}>
          <Image style={styles.menImage} source={LOCAL_IMAGES.BOY_IMAGE} />
          <Image style={styles.menImage} source={LOCAL_IMAGES.WOMEN} />
          <Image style={styles.menImage} source={LOCAL_IMAGES.BOY_IMAGE} />
        </View>
      </LinearGradient>
      <Text style={styles.categoryText}>{LOCAL_STRINGS.TOP_CATEGORY}</Text>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          numColumns={2}
          horizontal={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  familyCard: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginTop: 70,
    borderRadius: 20,
  },
  familyText: {
    color: COLORS.GREY,
    marginTop: 20,
    marginHorizontal: 10,
  },
  moneyText: {
    marginHorizontal: 10,
    fontWeight: '900',
    color: COLORS.WHITE,
  },
  dotView: {
    flexDirection: 'row',
  },
  dotText: {
    fontSize: 18,
    color: COLORS.WHITE,
    marginHorizontal: 10,
  },
  numberText: {
    marginTop: 10,
    color: COLORS.GREY,
  },
  imageView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 12,
  },
  menImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: COLORS.WHITE,
  },
  categoryText: {
    marginHorizontal: 50,
    marginTop: 20,
    fontWeight: '500',
    fontSize: 13,
  },
  itemListView: {
    borderWidth: 10,
    borderColor: '#feffff',
    borderRadius: 25,
    width: 140,
    height: 150,
    marginVertical: 40,
    marginHorizontal: 30,
    // backgroundColor: '#d8d6f0',
  },
  rsText: {
    color: COLORS.NAVEY_BLUE,
  },
  // itemImgStyle: {
  //   height: 30,
  //   width: 30,
  // },
  categoryTextStyel: {},
});
