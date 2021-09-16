import React, { useEffect } from 'react';
import { View, Text as RNText } from 'react-native';
import { Text, Stack, StackItem, SvgIcon } from '@books/ui';
import { ThemeProvider, createDefaultTheme } from '@casca/framework';

const theme = createDefaultTheme();

//console.log(theme);
export const App = () => {
  useEffect(() => {});

  return (
    <ThemeProvider theme={theme}>
      <View style={{ height: 600, padding: 80 }}>
        <Stack horizontal={false} gap={20} padding={18} verticalFill={true}>
          <StackItem grow={true}></StackItem>
          <SvgIcon size={36} />
          <Text>dsadas</Text>
          <StackItem>
            <RNText>dasdsadas</RNText>
          </StackItem>
        </Stack>
      </View>
    </ThemeProvider>
  );
};
