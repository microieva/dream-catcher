import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from '../StyleSheet';


class SoundtrackList extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage}
          source={require("../../assets/nightsky.jpg")}>
          <View style={styles.soundtrackListScreen}>

            <TouchableOpacity style= {styles.soundtrackButtons}>
              <Text style={styles.text}> sountrack 1 </Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.soundtrackButtons}>
              <Text style={styles.text}> sountrack 2 </Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.soundtrackButtons}>
              <Text style={styles.text}> sountrack 3 </Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.soundtrackButtons}>
              <Text style={styles.text}> soundtrack 4 </Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.soundtrackButtons}>
              <Text style={styles.text}> soundtrack 5 </Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </View>
    );
  }
};

export default SoundtrackList;