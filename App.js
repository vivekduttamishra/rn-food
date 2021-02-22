
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';


const navigator=createStackNavigator(
  {
    SearchScreen
  },
  {
    initialRouteName:'SearchScreen',
    defaultNavigationOptions:{
      title:'Food Search'
    }
  }
);

export default createAppContainer(navigator);