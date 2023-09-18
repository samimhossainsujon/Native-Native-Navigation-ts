/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import Favorites from '../../screen/Favorites/Favorites';
import Home from '../../screen/Home/Home';
import HomeDetails from '../../screen/Home/HomeDetails';
import CustomDrawerMenu from './CustomDrawerMenu';


// Drawer
const Drawer = createDrawerNavigator();


function DrawerGroup() {
    const navigation = useNavigation();

    const navigateToAnotherPage = () => {
        navigation.navigate('Searchbar');
    };
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerMenu {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1cca22',
                },
                headerShown: true,
                headerRight: () => (
                    <TouchableOpacity
                        onPress={navigateToAnotherPage}
                        style={{ flexDirection: 'row', gap: 26, marginRight: 10, }}>
                        <FontAwesome name="search" size={35} color="black" />
                    </TouchableOpacity>
                ),
            }}>
            <Drawer.Screen name="Home" component={HomeStackGroup} />
            <Drawer.Screen name="Favorites" component={Favorites} />
        </Drawer.Navigator>
    );
}

// Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeStackGroup" component={TopTabsGroup} />
            <HomeStack.Screen name="Home Details" component={HomeDetails} />
        </HomeStack.Navigator>
    );
}

// Top Tabs
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarLabelStyle: {
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    color: '#000000',
                },
                tabBarIndicatorStyle: {
                    height: 45,
                    borderRadius: 6,
                    backgroundColor: '#1DA1F2',
                },
            }}>
            <TopTabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <TopTabs.Screen name="HomeDetails" component={HomeDetails} />

        </TopTabs.Navigator>
    );
}

export default function Navigationbar() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#1cca22" barStyle="light-content" />
            <DrawerGroup />
        </NavigationContainer>
    );
}