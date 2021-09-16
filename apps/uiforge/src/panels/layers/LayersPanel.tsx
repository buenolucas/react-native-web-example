import { View } from '@adobe/react-spectrum';
import { FunctionComponent } from 'react';
import * as React from 'react';

import { nodesState, nodeState } from '../../nodes/nodeStates';
import { useRecoilValue } from 'recoil';

export interface ItemProps {
  id: string;
}

export const Item: FunctionComponent<ItemProps> = (props) => {
  const { id } = props;
  const node = useRecoilValue(nodeState(id));

  return (
    <div>
      {node.id} {node.type}
    </div>
  );
};

export interface LayersPanelProps {}

export const LayersPanel: FunctionComponent<LayersPanelProps> = (_props) => {
  const nodes = useRecoilValue(nodesState);

  return (
    <View backgroundColor="gray-50" width="100vw" height="100%">
      {nodes.map((node) => {
        return <Item id={node}>dasdas {node}</Item>;
      })}
    </View>
  );
};
