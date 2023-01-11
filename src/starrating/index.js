import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const StarRating = () => {
  const [defaultRating, setDefaultRating] = useState(3);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled =
    'https://www.techup.co.in/wp-content/uploads/2020/11/ic_star_fill.png';

  const starImageCorner =
    'https://www.techup.co.in/wp-content/uploads/2020/11/ic_star.png';
  const startHalfFilled =
    'https://www.techup.co.in/wp-content/uploads/2020/11/ic_star_half.png';

  const onStarClick = (item, bool) => {
    console.log('---------->', item);
    if (bool) {
      item = item - 1 + 0.5;
    }
    setDefaultRating(item);
  };

  const CustomRatingBar = () => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <View>
              <Image
                style={styles.imageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : item >= defaultRating && item < defaultRating + 1
                    ? {uri: startHalfFilled}
                    : {uri: starImageCorner}
                }
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  position: 'absolute',
                }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    width: 20,
                    height: 40,
                  }}
                  onPress={() => onStarClick(item, true)}
                />

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    width: 20,
                    height: 40,
                  }}
                  onPress={() => onStarClick(item, false)}
                />
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}> Rating Bar</Text>

        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert('Selected Ratings ' + defaultRating)}>
          <Text style={styles.buttonTextStyle}>Get Selected Ratings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#ff0002',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  ratingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  imageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
