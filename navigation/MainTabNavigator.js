import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NearByScreen from '../screens/NearByScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Category: CategoryScreen,
        Product: ProductDetailsScreen
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: ({focused}) => <TabBarLabel title="Home" focused={focused}/>,
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-home${focused ? '' : '-outline'}`
                    : 'md-home'
            }
        />
    ),
};

HomeStack.path = '';

const NearByStack = createStackNavigator(
    {
        NearBy: NearByScreen,
    },
    config
);

NearByStack.navigationOptions = {
    tabBarLabel: ({focused}) => <TabBarLabel title="Near By" focused={focused}/>,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-locate' : 'md-locate'}/>
    ),
};

NearByStack.path = '';

const FavoritesStack = createStackNavigator(
    {
        Favorites: FavoritesScreen,
    },
    config
);

FavoritesStack.navigationOptions = {
    tabBarLabel: ({focused}) => <TabBarLabel title="Favorites" focused={focused}/>,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}/>
    ),
};

FavoritesStack.path = '';

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    },
    config
);

ProfileStack.navigationOptions = {
    tabBarLabel: ({focused}) => <TabBarLabel title="Profile" focused={focused}/>,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}/>
    ),
};

ProfileStack.path = '';


const tabNavigator = createBottomTabNavigator({
    HomeStack,
    NearByStack,
    FavoritesStack,
    ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
