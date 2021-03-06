import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";

import ComputerScreen from './src/screens/ComputerScreen';

import List from './src/screens/ListScreen';

import ImageScreen from './src/screens/reusable_components/ImageScreen';

import Counter from './src/screens/State/firstState_app';

import ColorSelect from './src/screens/State/secondState_app';

import ThirdStateApp from './src/screens/State/thirdState_app';

import InputTextState from './src/screens/State/fourState_app';

import BoxScreen from './src/screens/LayoutNative/BoxScreen';

import RestaurantSearchApp from './src/screens/RestaurantSearchApp/RestaurantSearchApp';
import Business from './src/screens/RestaurantSearchApp/BusinessDetail/BusinessDetail';

import Blog from './src/screens/Blog/IndexScreen';
import ShowScreen from './src/screens/Blog/ShowScreen';
import CreateScreen from './src/screens/Blog/CreateScreen';
import EditScreen from './src/screens/Blog/EditScreen';
import {Provider} from './src/screens/Blog/context/context';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Computer: ComputerScreen,
    List: List,
    ImageScreen: ImageScreen,
    Counter: Counter,
    ColorSelect: ColorSelect,
    ThirdStateApp: ThirdStateApp,
    TextInput: InputTextState,
    BoxScreen: BoxScreen,
    RestaurantSearchApp: RestaurantSearchApp,
    Business: Business,
    Blog: Blog,
    ShowScreen: ShowScreen,
    CreateScreen: CreateScreen,
    EditScreen: EditScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learn ReactNative"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return(
    <Provider>
      <App />
    </Provider>
  );
}
