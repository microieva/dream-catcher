import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../StyleSheet';


class TimerSettings extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage}
          source={require("../../assets/nightsky.jpg")}>
          <View style={styles.timerScreen}>

            <TouchableOpacity style={styles.timerButtons}>
              <Text style={styles.text}> h, min </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.timerButtons}>
              <Text style={styles.text}> start </Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </View>
    );
  }
};

export default TimerSettings;