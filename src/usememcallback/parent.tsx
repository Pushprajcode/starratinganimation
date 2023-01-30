import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import Child from './child';

export default function Parent() {
  const [count, setCount] = useState(0);
  const click = () => {
    setCount(count + 1);
  };
  const x = useMemo(() => <Child />, []);
  console.log('______>', x);
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 90}}>
      <TouchableOpacity onPress={click}>
        <Text style={{color: 'red'}}>parent</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      {x}
    </View>
  );
}

const styles = StyleSheet.create({});
