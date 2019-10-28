import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginView from './login';
import Exe4 from './Exe4';
import Insert from './InsertSanPham';
import Delete from './DeletedSanPham';
import Update from './updateSanPham';
import FetchExample from './Fetch';
import Users from './Home';

const MainNavigator = createStackNavigator({
  Users: {screen: Users},
  Exe4: {screen: Exe4},
  Insert: {screen: Insert},
  Delete: {screen: Delete},
  Update: {screen: Update},

});

const App = createAppContainer(MainNavigator);

export default App;