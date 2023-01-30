import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import WrapperComponent from '../../../component/progressbar/wrapperComponent';

export default function SignUp() {
  const [value, setValue] = useState({
    name: '',
    emial: '',
    phone: '',
    password: '',
  });
  return (
    <View>
      <WrapperComponent>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{backgroundColor: 'red'}}>{'HELLO'}</Text>
          <Text style={{backgroundColor: 'red'}}>{'HELLO'}</Text>
          <Text style={{backgroundColor: 'red'}}>{'HELLO'}</Text>
          {/* <Text style={{backgroundColor: 'red'}}>{'HELLO'}</Text>
          <Text style={{backgroundColor: 'red'}}>{'HELLO'}</Text>
          <Text style={{backgroundColor: 'red'}}>{'HELLO'}</Text>
          <Text style={{backgroundColor: 'red'}}>{'HELLO'}</Text>
          <Text style={{backgroundColor: 'red'}}>{'HELLO'}</Text> */}
        </View>
      </WrapperComponent>
    </View>
  );
}

const styles = StyleSheet.create({});
