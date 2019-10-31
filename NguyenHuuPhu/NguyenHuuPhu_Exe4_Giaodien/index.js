/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import LoginView from './login';
import Insert from './InsertSanPham';
import Delete from './DeletedSanPham';
import Update from './updateSanPham';
// m chay cai nao dau tien?
// User - Insert - delete -update
import Users from './Home';

AppRegistry.registerComponent(appName, () => App);
