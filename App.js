import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoDetailScreen from './src/screens/MemoDetailScreen';
import Appbar from './src/components/Appbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoDetailScreen />
      </View>
    );
  }
}
