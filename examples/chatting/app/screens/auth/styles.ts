// Dependencies
import { StyleSheet } from 'react-native';

/**
 * @file styles.ts
 * @author Daniel Mejia
 * @description Styles definition for component.
 */

/**
 * Component styles definition object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageSize: {
    width: 200,
    height: 400,
  },
  text: {
    fontSize: 16,
  },
  switchAuthContainer: {
    paddingBottom: 30,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchAuth: {
    fontWeight: '700',
  },
});

export default styles;
