/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Linking, Share, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CustomDrawerMenu(props: any) {
    const handleDrawerItemClick = () => {
        props.navigation.closeDrawer();
    };

    const openPlayStoreRating = () => {
        const packageName = 'com.samimhossain.jobscircular';
        const playStoreUrl = `market://details?id=${packageName}`;
        Linking.openURL(playStoreUrl).catch(err =>
            console.error('Error opening Play Store:', err),
        );
    };

    const MoreApps = () => {
        const playStoreLink =
            'https://play.google.com/store/apps/developer?id=MY+RIGIL+SOFT';
        Linking.openURL(playStoreLink).catch(err =>
            console.error('An error occurred while opening the Play Store:', err),
        );
    };

    // cheak and fix
    const shareApp = async () => {
        try {
            const playStoreLink =
                'https://play.google.com/store/apps/details?id=com.samimhossain.jobscircular';
            const result = await Share.share({
                message: `Check out this awesome app: ${playStoreLink}`,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Shared successfully
                } else {
                    // Shared successfully
                }
            } else if (result.action === Share.dismissedAction) {
                // Share sheet dismissed
            }
        } catch (error) {
            console.error('Error sharing app:');
        }
    };

    const CheckForUpdate = () => {
        const updateLink =
            'https://play.google.com/store/apps/details?id=com.samimhossain.jobscircular';
        Linking.openURL(updateLink).catch(err =>
            console.error('CheckForUpdate', err),
        );
    };

    const FacebookGroup = () => {
        const facebookLink = 'https://www.facebook.com/groups/chakrirkhobor.news';
        Linking.openURL(facebookLink).catch(err =>
            console.error('FacebookGroup:', err),
        );
    };

    const ContactUs = () => {
        const facebookLink = 'https://www.facebook.com/alljobsbdTeletalks';
        Linking.openURL(facebookLink).catch(err =>
            console.error('FacebookPage:', err),
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 8,
                            marginBottom: 10,
                            padding: 10,
                        }}
                        onPress={handleDrawerItemClick}>
                        <AntDesign name="arrowleft" color="black" size={30} />
                        <Text style={{ marginLeft: 10, color: 'black', fontWeight: 'bold' }}>
                            Close Menu
                        </Text>
                    </TouchableOpacity>
                </View>

                <DrawerItem
                    icon={({ color }) => <Entypo name="home" color={color} size={30} />}
                    label="Home"
                    onPress={() => {
                        props.navigation.navigate('HomeStackGroup');
                    }}
                    focused={
                        props.state.routeNames[props.state.index] === 'HomeStackGroup'
                    }
                />

                <DrawerItem
                    icon={({ color }) => (
                        <MaterialIcons name="favorite" color={color} size={30} />
                    )}
                    label="Favorites"
                    onPress={() => {
                        props.navigation.navigate('Favorites');
                    }}
                    focused={props.state.routeNames[props.state.index] === 'Favorites'}
                />                        

                {/* Help Center*/}
                <>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 5,
                            marginBottom: 5,
                        }}>
                        <Text
                            style={{
                                fontSize: 17,
                                textDecorationLine: 'underline',
                                fontWeight: 'bold',
                                marginLeft: 15,
                                color: 'black',
                            }}>
                            Help Center
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="android1" color={color} size={30} />
                        )}
                        label="More Apps"
                        onPress={MoreApps}
                        focused={props.state.routeNames[props.state.index] === 'MoreApps'}
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialIcons name="security-update" color={color} size={30} />
                        )}
                        label="Cheak For Update"
                        onPress={CheckForUpdate}
                        focused={
                            props.state.routeNames[props.state.index] === 'AgeCalculator'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="facebook-square" color={color} size={30} />
                        )}
                        label="Join Facebook Group"
                        onPress={FacebookGroup}
                        focused={
                            props.state.routeNames[props.state.index] === 'AgeCalculator'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="contacts" color={color} size={30} />
                        )}
                        label="Contact Us"
                        onPress={ContactUs}
                        focused={
                            props.state.routeNames[props.state.index] === 'AgeCalculator'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="sharealt" color={color} size={30} />
                        )}
                        label="অ্যাপ শেয়ার করুন"
                        onPress={shareApp}
                        focused={props.state.routeNames[props.state.index] === 'ShareApp'}
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="star" color={color} size={30} />
                        )}
                        label="5 স্টার দিন"
                        onPress={openPlayStoreRating}
                        focused={
                            props.state.routeNames[props.state.index] === 'AgeCalculator'
                        }
                    />
                </>

                {/* opsonal  */}

                <View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 8,
                            marginBottom: 15,
                            padding: 10,
                        }}
                        onPress={handleDrawerItemClick}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}