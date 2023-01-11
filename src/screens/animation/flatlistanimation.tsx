import {FlatList, StyleSheet, Text, View, Image, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';

export default function FlatlistAnimation() {
  const [Data, setData] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    const apiPhotos = 'https://jsonplaceholder.typicode.com/photos';
    axios
      .get(apiPhotos)
      .then((respose: any) => {
        setData(respose?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const renderItem = ({item, index}) => {
    const scale = scrollY.interpolate({
      inputRange: [-1, 0, 140 * index, 140 * (index + 0.8)],
      outputRange: [1, 1, 1, 0],
    });
    return (
      <Animated.View
        style={[
          styles.items,
          {
            transform: [
              {
                scale,
              },
            ],
          },
        ]}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          source={{uri: item.url}}
        />
        <View style={styles.wrapperText}>
          <Text>{index + ' : ' + item.titlex}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={{marginTop: 30}}>
      <Animated.FlatList
        data={Data}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: '#ffff',
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#fff0ff',
    height: 120,
    width: 340,
    borderColor: 'red',
    borderWidth: 1,
    shadowOpacity: 0.4,
    shadowRadius: 9,
    padding: 0,
  },
  wrapperText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
});
