// import {Image, StatusBar, StyleSheet, View} from 'react-native';
// import React, {Children} from 'react';
// // import {
// //   normalize,
// //   SCREEN_HEIGHT,
// //   SCREEN_WIDTH,
// //   vh,
// //   vw,
// // } from '@geofirm/utils/dimensions';
// // import localImages from '@geofirm/utils/localImages';
// // import {Colors} from '@geofirm/themes';
// import {SafeAreaView} from 'react-native-safe-area-context';

// type Props = {
//   large?: boolean;
//   children?: any;
//   customStyleBG?: any;
// };
// export default function Backgroundwrapper(props: Props) {
//   const {large = false} = props;
//   return (
//     <SafeAreaView style={[styles.mainView, props.customStyleBG]}>
//       <StatusBar backgroundColor={Colors.primaryColor} translucent />
//       <Image
//         source={
//           large ? localImages.backgroundLarge : localImages.backgroundSmall
//         }
//         style={styles.backgroundImage}
//       />

//       {props.children}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     // position: 'absolute',
//   },
//   backgroundImage: {
//     height: SCREEN_HEIGHT,
//     resizeMode: 'stretch',
//     width: SCREEN_WIDTH,
//     position: 'absolute',
//   },
// });
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import LOCAL_IMAGES from '../../utils/localImages';
interface props {
  children;
  signloginText?;
  mainText;
}

export default function WrapperComponent({
  children,
  signloginText,
  mainText,
}: props) {
  console.log('______>', children);
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#61d"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
      {/* <Text>wrapperComponent</Text> */}
      <Image
        source={LOCAL_IMAGES.BOY_IMAGE}
        resizeMode={'contain'}
        style={styles.wrapperImgaeStyle}
      />
      {/* <Text>{signloginText}</Text> */}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperImgaeStyle: {
    width: '100%',
    resizeMode: 'stretch',
  },
});
