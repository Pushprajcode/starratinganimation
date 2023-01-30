import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BugetLimit from '../screens/bugetlimit';
import horizontalprogress from '../component/progressbar/horizontalprogress';
import Horizontalprogress from '../component/progressbar/horizontalprogress';
// export default function RouterScreen() {
//   // // const linking = {
//   // //   prefixes: ['geofirm://'],
//   // //   config: {
//   // //     screens: {
//   // //       resetPassword: ScreenNames.CONTACTSYNC,
//   // //     },
//   // //   },

//   // return (
//   //   <NavigationContainer
//   //   // ref={navigationRef}
//   //   >
//   //     <Stack.Navigator
//   //       // initialRouteName={ScreenNames.SPLASH}
//   //       screenOptions={{
//   //         headerShown: false,
//   //         gestureEnabled: false,
//   //       }}>
//   //       <Stack.Screen
//   //         options={{
//   //           gestureEnabled: false,
//   //         }}
//   //         name={ScreenNames.BugetLimit}
//   //         component={BugetLimit}
//   //       />
//   //     </Stack.Navigator>
//   //   </NavigationContainer>
//   // );
// }

export default function RouterScreen() {
  const Stack = createNativeStackNavigator<any>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="horizontalprogress"
        // animationEnabled={true}
        // screenOptions={{
        //   // headerShown: false,
        //   // gestureEnabled: false,
        //   headerBackTitleStyle = {fontSize: 30},
        // }}
      >
        {/* <Stack.Screen
          options={{
            gestureEnabled: false,
          }}
          name="BugetLimit"
          component={BugetLimit}
        /> */}
        <Stack.Screen
          options={{
            gestureEnabled: false,
          }}
          name="Horizontalprogress"
          component={Horizontalprogress}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});
