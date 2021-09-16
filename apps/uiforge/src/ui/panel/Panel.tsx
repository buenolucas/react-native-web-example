import * as React from 'react';
import { View } from '@adobe/react-spectrum';
import { FunctionComponent } from 'react';

export interface PanelProps {}
export const Panel: FunctionComponent<PanelProps> = (props) => {
  const { children } = props;
  return <View>{children}</View>;
};
