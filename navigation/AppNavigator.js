import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LogIn from "../screens/LogInScreen";
import signUp from "../screens/SignUpScreen";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    First: createStackNavigator({
      SignIn: LogIn,
      signUp
    }),
    Main: MainTabNavigator
  })
);
