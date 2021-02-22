
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';


const navigator=createStackNavigator(
  {
    SearchScreen,
    RestaurantDetailsScreen
  },
  {
    initialRouteName:'SearchScreen',
    defaultNavigationOptions:{
      title:'Food Search'
    }
  }
);

export default createAppContainer(navigator);