import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../themes/';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    width: width * 0.95,
    alignItems: 'center',
    backgroundColor: Colors.surface,
  },
  icon: {
    paddingHorizontal: 10,
  },
  line: {
    height: 35,
    width: 1,
    backgroundColor: Colors.primary,
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 0.6,
    color: Colors.primary,
  },
});
export default styles;
