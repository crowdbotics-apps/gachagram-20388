import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera4103143Navigator from '../features/Camera4103143/navigator';
import NotificationList5103142Navigator from '../features/NotificationList5103142/navigator';
import Messaging6103141Navigator from '../features/Messaging6103141/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera4103143: { screen: Camera4103143Navigator },
NotificationList5103142: { screen: NotificationList5103142Navigator },
Messaging6103141: { screen: Messaging6103141Navigator },

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
