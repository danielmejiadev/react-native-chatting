// Dependencies
import React from 'react';
import { View, Text, Image, ImageProps } from 'react-native';
import { Icon, IconProps } from 'react-native-elements';

// Styles
import styles from './styles';

/**
 * Proptypes definition of component.
 */
export interface NoItemsProps {
  icon?: IconProps;
  text: string;
  imageSource?: ImageProps;
}

/**
 * @component NoItems
 * @author Daniel Mejia
 * @description No items view.
 */
export function NoItems(props: NoItemsProps): React.ReactElement {
  const { imageSource, icon, text } = props;

  return (
    <View style={styles.container}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      {icon && <Icon {...icon} />}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

/**
 * Component default props.
 */
NoItems.defaultProps = {
  imageSource: undefined,
  icon: undefined,
};

export default NoItems;
