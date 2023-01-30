import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Snackbar from 'react-native-snackbar';
import COLORS from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import {GalleryPermission} from '../../utils/permissions';
import ImagePicker from 'react-native-image-crop-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Horizontalprogress() {
  const [imageProfile, setImgaeProfile] = useState('');
  // const [multiple, setMultiple] = useState('');
  // const [viewProfile, setviewProfile] = useState('');
  const [profile, setProfile] = useState([]);
  // console.log('------->', profile);

  const onpress = () => {
    GalleryPermission();
    // openGallery();
  };
  const openGallery = () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   setImgaeProfile(image.path);
    // });
    // ImagePicker.openPicker({
    //   multiple: true,
    // }).then(images => {
    //   // console.log(images);
    //   // images.map((item: any) => {
    //   //   // console.log('------>', item);
    //   //   // setProfile(item);
    //   // });
    //   // setProfile(images);
    //   setProfile(images);
    // });
    // ImagePicker.openCropper({
    //   path: 'my-file-path.jpg',
    //   width: 300,
    //   height: 400
    // }).then(image => {
    //   console.log(image);
    // });
    //     ImagePicker.openCropper({
    // path:
    //     })
  };
  Snackbar.show({
    text: 'invalid credetail sir',
    duration: Snackbar.LENGTH_SHORT,
  });
  // const renderItem = ({item}) => {
  //   console.log('----->', item);
  //   return (
  //     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
  //       <Image style={{height: 40, width: 40}} source={{uri: item.path}} />
  //     </View>
  //   );
  // };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={onpress}>
        <Text>{'PERMISSION'}</Text>
        {/* <Image style={{height: 40, width: 40}} source={{uri: imageProfile}} /> */}
        {/* <Image style={{height: 40, width: 40}} source={{uri: imageProfile}} /> */}
        {/* <FlatList data={profile} renderItem={renderItem} /> */}
        {/* {profile.map((item: any, index) => {
          console.log('first', item.path);
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'red',
              }}>
              <Image
                style={{height: 40, width: 40}}
                source={{uri: item.path}}
              />
            </View>
          );
        })} */}
      </TouchableOpacity>
    </View>
  );
}
