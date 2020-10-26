import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  memoDate: {
    fontSize: 12,
  },
});

class MemoList extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム1</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム2</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム3</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム4</Text>
            <Text style={styles.memoDate}>2017/10/15</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MemoList;
