import { ActionButton, View } from '@adobe/react-spectrum';
import { FunctionComponent } from 'react';
import * as React from 'react';
import { useInsertNode } from '../hooks/useInsertNode';

export interface ToolbarProps {}
export const Toolbar: FunctionComponent<ToolbarProps> = (_props) => {
  //let [action, setAction] = React.useState();

  const insertElement = useInsertNode();
  //let [selection, setSelection] = React.useState('');

  const dispacthAction = () => {
    insertElement('DOCUMENT');
  };
  return (
    <View backgroundColor="gray-600" height="size-800" width="100vw">
      <ActionButton onPress={dispacthAction}>Element</ActionButton>
    </View>
  );
};
