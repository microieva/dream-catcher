import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  homeScreen: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  homeScreenButtons: {
    marginTop: 50,
    width: 220,
    height: 80,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: (255, 255, 255), //buttons black, >transparent on click. looks good
  },
  text: {
    color: 'white',
    textAlignVertical: 'center',
    alignSelf: 'center',
    paddingTop: 25,
    fontWeight: 'bold',
    fontSize: 20,
  },
  soundtrackListScreen: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  soundtrackButtons: {
    marginTop: 40, // gaps between the buttons
    width: 220,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: (255, 255, 255),
  },
  timerScreen: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  timerButtons: {
    marginTop: 50,
    width: 220,
    height: 80,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: (255, 255, 255),
  },
});

export default styles;
