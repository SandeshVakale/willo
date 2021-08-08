import {StyleSheet} from 'react-native';
import colors from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  textContainer: {
    position: 'absolute',
    textAlign: 'center',
    bottom: 20,
  },
  text: {
    fontWeight: 'bold',
    color: colors.primary,
  },
});
export default styles;
