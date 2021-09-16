import React from 'react';
import { RecoilRoot } from 'recoil';
import { Provider, defaultTheme } from '@adobe/react-spectrum';

export interface ForgeAppProviderProps {}

export const ForgeAppProvider: React.FunctionComponent<ForgeAppProviderProps> = (props) => {
  const { children } = props;
  return (
    <RecoilRoot>
      <Provider theme={defaultTheme} colorScheme={'light'}>
        {children}
      </Provider>
    </RecoilRoot>
  );
};
