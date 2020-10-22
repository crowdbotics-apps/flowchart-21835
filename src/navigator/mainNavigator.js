import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial155980Navigator from '../features/Tutorial155980/navigator';
import NotificationList155952Navigator from '../features/NotificationList155952/navigator';
import Settings155951Navigator from '../features/Settings155951/navigator';
import Settings155943Navigator from '../features/Settings155943/navigator';
import UserProfile155941Navigator from '../features/UserProfile155941/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial155980: { screen: Tutorial155980Navigator },
NotificationList155952: { screen: NotificationList155952Navigator },
Settings155951: { screen: Settings155951Navigator },
Settings155943: { screen: Settings155943Navigator },
UserProfile155941: { screen: UserProfile155941Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
