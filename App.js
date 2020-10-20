import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComputerScreen from './src/screens/ComputerScreen';
import List from './src/screens/ListScreen';
import ImageScreen from './src/screens/reusable_components/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Computer: ComputerScreen,
    List: List,
    ImageScreen: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learn ReactNative"
    }
  }
);

export default createAppContainer(navigator);
