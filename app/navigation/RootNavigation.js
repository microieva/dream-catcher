import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SoundtrackList from '../screens/SoundtrackList';
import TimerSettings from '../screens/TimerSettings';


const RootStack = createStackNavigator(
    {
        Home: {screen: HomeScreen,},
        SoundTracks: {screen: SoundtrackList,},
        Timer: {screen: TimerSettings,},
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(RootStack);
