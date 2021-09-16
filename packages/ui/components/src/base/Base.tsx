import * as React from 'react';
//import { Theme, casca, themeHelper } from '@casca/framework';
import { Pressable, Text } from 'react-native';
import { useBaseCasca } from './Base.casca';
import { BaseProps } from './Base.types';

export const Base = (props: BaseProps) => {
  const { hitArea, label } = useBaseCasca(props);
  const { label: labelValue } = props;
  return (
    <Pressable {...hitArea} onPress={() => console.log('pressed')}>
      <Text {...label}>{labelValue}</Text>
    </Pressable>
  );
};
