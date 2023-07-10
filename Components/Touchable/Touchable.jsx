import React, {Component} from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
    alert('You tapped the button!');
    console.log('You tapped the button!');
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
    alert(
        //title
        'Hello',
        //body
        'You long-pressed the button! I am two option alert. Do you want to cancel me ?',
        [
          {
            text: 'Yes',
            onPress: () => console.log('Yes Pressed')
          },
          {
            text: 'No',
            onPress: () => console.log('No Pressed'), style: 'cancel'
          },
        ],
        {cancelable: false},
        //clicking out side of alert will not cancel
      );
    console.log('You long-pressed the button!');
  }

  render() {
    return (
      <View style={touchableStyles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={touchableStyles.button}>
            <Text style={touchableStyles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={touchableStyles.button}>
            <Text style={touchableStyles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : undefined
          }>
          <View style={touchableStyles.button}>
            <Text style={touchableStyles.buttonText}>
              TouchableNativeFeedback{' '}
              {Platform.OS !== 'android' ? '(Android only)' : ''}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={touchableStyles.button}>
            <Text style={touchableStyles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white">
          <View style={touchableStyles.button}>
            <Text style={touchableStyles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const touchableStyles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});