import {StyleSheet} from 'react-native';
import colors from '../../themes/Colors';

const styles = StyleSheet.create({
  timeStyle: {
    textAlign: 'center',
    backgroundColor: colors.primary,
    color: 'white',
    padding: 5,
    borderRadius: 13,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    padding: 4,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: colors.primary,
  },
});
export default styles;
