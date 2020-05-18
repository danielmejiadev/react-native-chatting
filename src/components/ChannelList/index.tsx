// Dependencies
import React from 'react';
import { View, FlatList, Text, ViewStyle, StyleProp } from 'react-native';

// Styles
import styles from './styles';

/**
 * Props definition of {@link ChannelList}
 * @interface ChannelListProps
 */
export interface ChannelListProps {
  containerStyle: StyleProp<ViewStyle>;
}

/**
 * Channel list component.
 * @param props The properties of component.
 * @returns The react component.
 */
export function ChannelList(props: ChannelListProps): React.ReactElement {
  const { containerStyle } = props;
  return (
    <View style={[containerStyle]}>
      <FlatList
        data={[1]}
        renderItem={({ }) => <Text>here</Text>}
        keyExtractor={(channel: any) => channel.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

export default ChannelList;