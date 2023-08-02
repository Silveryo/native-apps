import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  card: {
    marginVertical: 4,
    padding: 6,
    minHeight: 200,
    backgroundColor: 'orange',
  },
});

export default styles;
