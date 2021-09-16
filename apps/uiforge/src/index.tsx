import { AppRegistry } from 'react-native';

import { ForgeApp } from './ForgeApp';

AppRegistry.registerComponent('ForgeApp', () => ForgeApp);

AppRegistry.runApplication('ForgeApp', { rootTag: document.getElementById('root') });

export default ForgeApp;
