import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface props {
  header: string;
  subheader: string;
}

export default function ListEmptyComponent({header, subheader}: props) {
  return (
    <View>
      <Text>listEmptyComponent</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
