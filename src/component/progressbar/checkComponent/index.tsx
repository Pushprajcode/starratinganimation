import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListEmptyComponent from '../listEmptyComponent';

export default function index() {
  const listHeader = () => {
    return (
      <SafeAreaView>
        <View>
          <Text>{'DKDKKDKDKDKD'}</Text>
        </View>
      </SafeAreaView>
    );
  };

  const inboxList = () => {
    return (
      <FlatList
        ListEmptyComponent={
          <ListEmptyComponent header={'kjdjkdjk'} subheader={'pushpraj'} />
        }
      />
    );
  };
  return (
    <View style={styles.mainViewStyle}>
      {inboxList()}
      {listHeader()}
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
  },
});
