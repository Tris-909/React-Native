import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComputerScreen from './src/screens/ComputerScreen';
import List from './src/screens/ListScreen';
import ImageScreen from './src/screens/reusable_components/ImageScreen';
import Counter from './src/screens/State/firstState_app';
import ColorSelect from './src/screens/State/secondState_app';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Computer: ComputerScreen,
    List: List,
    ImageScreen: ImageScreen,
    Counter: Counter,
    ColorSelect: ColorSelect
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learn ReactNative"
    }
  }
);

export default createAppContainer(navigator);
