// Dependencies
import { StyleSheet } from 'react-native';

/**
 * @file styles.js
 * @author Daniel Mejia
 * @description Styles definition for component.
 */

/**
 * Component styles definition object.
 * @type { object }
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    marginTop: 10,
  },
});

export default styles;
