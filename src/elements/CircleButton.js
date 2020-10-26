import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#008b8b',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 30,
  },
});

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default CircleButton;
