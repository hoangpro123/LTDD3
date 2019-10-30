import React from 'react';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator} from 'react-navigation-stack';
import Album from './Album';
import Galleries from './Galleries';

const RootStack = createStackNavigator(
  {
    Album: Album,
    Galleries: Galleries,
  },
  {
    initialRouteName: 'Album',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

