import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',

  },

  appbarTitle: {
    color: '#fff',
    fontSize: 30,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <Text syle={styles.appbarTitle}>MEMOT</Text>
        </View>

        <View style={styles.memoList}>
          <View syle={styles.memoListItetm}>
            <Text style={styles.memoTitle}>講座のアイテム1</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View syle={styles.memoListItetm}>
            <Text style={styles.memoTitle}>講座のアイテム2</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View syle={styles.memoListItetm}>
            <Text style={styles.memoTitle}>講座のアイテム3</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View syle={styles.memoListItetm}>
            <Text style={styles.memoTitle}>講座のアイテム4</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View>
            <Text>+</Text>
          </View>
        </View>
      </View>
    );
  }
}
