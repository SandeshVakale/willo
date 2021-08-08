import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../themes/Colors';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: 'center',
    width: width * 0.95,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  text: {
    color: colors.surface,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  indicator: {
    color: colors.surface,
  },
});
export default styles;
