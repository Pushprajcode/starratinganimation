import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarRating from './src/starrating';
import AnimationScreen from './src/screens/animation';
import Interpolation from './src/screens/animation/interpolation';
import FlatlistAnimation from './src/screens/animation/flatlistanimation';
import Ballmove from './src/screens/animation/ballmove';
import ExpensesScreen from './src/screens/payment';
import SummeryScreen from './src/screens/payment/test';
import BugetLimit from './src/screens/bugetlimit';
import Parent from './src/usememcallback/parent';
import Router from './src/router';
import RouterScreen from './src/router';
import Horizontalprogress from './src/component/progressbar/horizontalprogress';
import SignUp from './src/screens/bugetlimit/signup';

export default function App() {
  return (
    <>
      {/* <StarRating /> */}
      {/* <AnimationScreen />
      <Interpolation /> */}
      {/* <FlatlistAnimation /> */}
      {/* <Ballmove /> */}
      {/* <ExpensesScreen /> */}
      {/* <Test /> */}
      {/* <SummeryScreen /> */}
      {/* <BugetLimit /> */}
      {/* <Parent /> */}
      {/* <RouterScreen /> */}
      {/* <Horizontalprogress /> */}
      <SignUp />
    </>
  );
}

const styles = StyleSheet.create({});
