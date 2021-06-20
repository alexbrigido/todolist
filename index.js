/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Register);
