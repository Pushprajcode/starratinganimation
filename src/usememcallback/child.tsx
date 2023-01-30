import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Child() {
  console.log('first');
  return (
    <View>
      <Text>child</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
