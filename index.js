/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AppPro from './src/screens/login/Index';
AppRegistry.registerComponent(appName, () => AppPro);
