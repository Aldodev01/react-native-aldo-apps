/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {Splash} from './src/pages';
// import Upload from './src/pages/upload';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Splash);
