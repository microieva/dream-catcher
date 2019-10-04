import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../StyleSheet';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage}
          source={require("../../assets/nightsky.jpg")}>
            <View style={styles.homeScreen}>

              <TouchableOpacity style= {styles.homeScreenButtons}
                  onPress={() => this.props.navigation.navigate("SoundTracks", 
                    {/*parameters ?????? */})}>
                <Text style={styles.text}> soundtracks </Text>
              </TouchableOpacity>
              <TouchableOpacity style= {styles.homeScreenButtons}
                  onPress={() => this.props.navigation.navigate("Timer",
                    {/*parameters*/})}>
                <Text style={styles.text}> timer </Text>
              </TouchableOpacity>
              <TouchableOpacity style= {styles.homeScreenButtons}>
                <Text style={styles.text}> stop </Text>
              </TouchableOpacity>
             
            </View>
        </ImageBackground>
      </View>
    );
  }
};

export default HomeScreen;
