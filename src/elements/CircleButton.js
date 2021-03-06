import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 34,
  },
});

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#008b8b';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#008b8b';
    }
    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default CircleButton;
