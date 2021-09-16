import * as React from 'react';
import { View, StyleSheet } from 'react-native';

/*
export const RendererInner: React.FunctionComponent = (props) => {};
*/
export interface RendererProps {
  component: any;
}
import { ThemeProvider } from '@casca/framework';
import { createDefaultTheme } from '@casca/framework';
const theme = createDefaultTheme();
export const Renderer: React.FunctionComponent<RendererProps> = (props) => {
  const { component: ComponentClass } = props;

  return (
    <ThemeProvider theme={theme}>
      <View style={skins.root}>
        <View style={skins.dashboard}>
          <View style={skins.componentSlot}>
            <ComponentClass />
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
};

const skins = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
  },
  dashboard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentSlot: {},
});
