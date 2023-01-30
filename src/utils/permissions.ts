import {Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  checkNotifications,
} from 'react-native-permissions';

export const GalleryPermission = () => {
  check(
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  )
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          request(
            Platform.OS === 'ios'
              ? PERMISSIONS.IOS.CAMERA
              : PERMISSIONS.ANDROID.CAMERA,
          ).then(result => {
            console.log('request has been created', result);
          });
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');

          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      // …
    });
};
