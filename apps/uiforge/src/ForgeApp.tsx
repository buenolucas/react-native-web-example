import React from 'react';

import { View, Flex } from '@adobe/react-spectrum';
import { Renderer } from './components/Renderer';
import { ButtonForge } from './projects/Button.forge';
import { Toolbar } from './toolbar';
import { LayersPanel } from './panels';
import { createDocument } from './api/nodes';
import { ForgeAppProvider } from './ForgeAppProvider';

const d = createDocument();
console.log(d);
//console.log(theme);

export const ForgeApp = () => {
  return (
    <ForgeAppProvider>
      <Flex direction="column" height="100vh" gap="0">
        <Toolbar />
        <Flex direction="row" height="100%" gap="0" flexGrow={1} alignItems={'stretch'}>
          <View backgroundColor="gray-300" width={280}>
            <LayersPanel />
          </View>
          <View backgroundColor="gray-300" flexGrow={1} padding={28}>
            <Renderer component={ButtonForge} />
          </View>
          <View backgroundColor="gray-300" width={280} />
        </Flex>
      </Flex>
    </ForgeAppProvider>
  );
};
