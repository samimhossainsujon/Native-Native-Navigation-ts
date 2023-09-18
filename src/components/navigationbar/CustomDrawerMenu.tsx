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


                <DrawerItem
                    icon={({ color }) => (
                        <FontAwesome name="search" size={30} color="black" />
                    )}
                    label="Search Jobs"
                    onPress={() => {
                        props.navigation.navigate('Searchbar');
                    }}
                    focused={props.state.routeNames[props.state.index] === 'Searchbar'}
                />

                <DrawerItem
                    icon={({ color }) => <Ionicons name="alarm" color={color} size={30} />}
                    label="Job Alarm Set"
                    onPress={() => {
                        props.navigation.navigate('JobAlarmSet');
                    }}
                    focused={props.state.routeNames[props.state.index] === 'JobAlarmSet'}
                />

                {/* Government  job category */}
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
                            সরকারি চাকরির ক্যাটাগরি
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialIcons name="engineering" color={color} size={30} />
                        )}
                        label="Diploma Engineering"
                        onPress={() => {
                            props.navigation.navigate('Diploma Engineering Job');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] ===
                            'Diploma Engineering Job'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialIcons name="architecture" color={color} size={30} />
                        )}
                        label="Engineer Job"
                        onPress={() => {
                            props.navigation.navigate('Engineer Architect Job');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] ===
                            'Engineer Architect Job'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialIcons name="healing" color={color} size={30} />
                        )}
                        label="Health Job"
                        onPress={() => {
                            props.navigation.navigate('Health Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Health Jobs'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialIcons
                                name="directions-railway"
                                color={color}
                                size={30}
                            />
                        )}
                        label="Railway Job"
                        onPress={() => {
                            props.navigation.navigate('Railway Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Railway Jobs'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <FontAwesome5 name="chalkboard-teacher" color={color} size={30} />
                        )}
                        label="Teacher Job"
                        onPress={() => {
                            props.navigation.navigate('Teacher Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Teacher Jobs'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <FontAwesome name="universal-access" color={color} size={30} />
                        )}
                        label="University Job"
                        onPress={() => {
                            props.navigation.navigate('University Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'University Jobs'
                        }
                    />
                </>

                {/* bank job category */}
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
                            ব্যাংক জব ক্যাটাগরি
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="bank" color={color} size={30} />
                        )}
                        label="Bank Job"
                        onPress={() => {
                            props.navigation.navigate('Bank Jobs');
                        }}
                        focused={props.state.routeNames[props.state.index] === 'Bank Jobs'}
                    />
                </>

                {/* DefenseJob job category */}
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
                            ডিফেন্স জবস ক্যাটাগরি
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <FontAwesome6
                                name="person-military-pointing"
                                color={color}
                                size={30}
                            />
                        )}
                        label="Defense Job"
                        onPress={() => {
                            props.navigation.navigate('Defense Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Defense Jobs'
                        }
                    />
                </>

                {/* সাপ্তাহিক চাকারির পত্রিকা */}
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
                            সাপ্তাহিক চাকরির পত্রিকা
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <FontAwesome name="newspaper-o" color={color} size={30} />
                        )}
                        label="চাকরির পত্রিকা"
                        onPress={() => {
                            props.navigation.navigate('চাকরির পত্রিকা');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'চাকরির পত্রিকা'
                        }
                    />
                </>

                {/* Privet  job category */}
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
                            বেসারকারি চাকরির ক্যাটাগরি
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <FontAwesome6 name="building-ngo" color={color} size={30} />
                        )}
                        label="NGO Job"
                        onPress={() => {
                            props.navigation.navigate('NGO Jobs');
                        }}
                        focused={props.state.routeNames[props.state.index] === 'NGO Jobs'}
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialIcons name="fitness-center" color={color} size={30} />
                        )}
                        label="Beauty Care Fitness"
                        onPress={() => {
                            props.navigation.navigate('Beauty Care Fitness');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] ===
                            'Beauty Care Fitness'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialIcons name="support-agent" color={color} size={30} />
                        )}
                        label="Call Center"
                        onPress={() => {
                            props.navigation.navigate('Call Center Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Call Center Jobs'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <Entypo name="classic-computer" color={color} size={30} />
                        )}
                        label="Garments Textile Jobs"
                        onPress={() => {
                            props.navigation.navigate('Garments Textile Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] ===
                            'Garments Textile Jobs'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialIcons name="perm-media" color={color} size={30} />
                        )}
                        label="Media Job"
                        onPress={() => {
                            props.navigation.navigate('Media Jobs');
                        }}
                        focused={props.state.routeNames[props.state.index] === 'Media Jobs'}
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <Entypo name="time-slot" color={color} size={30} />
                        )}
                        label="Part Time Job"
                        onPress={() => {
                            props.navigation.navigate('Part Time Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Part Time Jobs'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <FontAwesome name="sellsy" color={color} size={30} />
                        )}
                        label="Sales Marketing Job"
                        onPress={() => {
                            props.navigation.navigate('Sales Marketing Jobs');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Sales Marketing Jobs'
                        }
                    />
                </>

                {/* Notice */}
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
                            নোটিশ ক্যাটাগরি
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="idcard" color={color} size={30} />
                        )}
                        label="Admit Card Download"
                        onPress={() => {
                            props.navigation.navigate('Admit Card Download');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Admit Card Download'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <Entypo name="back-in-time" color={color} size={30} />
                        )}
                        label="Job Exam Time"
                        onPress={() => {
                            props.navigation.navigate('Exam Time');
                        }}
                        focused={props.state.routeNames[props.state.index] === 'Exam Time'}
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <Foundation name="results" color={color} size={30} />
                        )}
                        label="Job Exam Result"
                        onPress={() => {
                            props.navigation.navigate('Exam Result');
                        }}
                        focused={props.state.routeNames[props.state.index] === 'Exam Result'}
                    />
                </>

                {/* আবেদন এর সহায়ক */}
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
                            আবেদন এর সহায়ক
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="calculator" color={color} size={30} />
                        )}
                        label="Age Calculator"
                        onPress={() => {
                            props.navigation.navigate('Age Calculator');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Age Calculator'
                        }
                    />
                </>

                {/*  Question Solution*/}
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
                            Question Solution
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialCommunityIcons
                                name="information"
                                color={color}
                                size={30}
                            />
                        )}
                        label="সাম্পতিক তথ্য"
                        onPress={() => {
                            props.navigation.navigate('সাম্পতিক তথ্য');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'সাম্পতিক তথ্য'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="questioncircle" color={color} size={30} />
                        )}
                        label="BCS প্রশ্ন ও সমাধান"
                        onPress={() => {
                            props.navigation.navigate('Bcs Question');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Bcs Question'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="questioncircle" color={color} size={30} />
                        )}
                        label="Primary Question"
                        onPress={() => {
                            props.navigation.navigate('Primary Question');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Primary Question'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="questioncircle" color={color} size={30} />
                        )}
                        label="NTRCA Question"
                        onPress={() => {
                            props.navigation.navigate('NIRCA Question');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'NIRCA Question'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="questioncircle" color={color} size={30} />
                        )}
                        label="Bank Question"
                        onPress={() => {
                            props.navigation.navigate('Bank Question');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'Bank Question'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <AntDesign name="questioncircle" color={color} size={30} />
                        )}
                        label="All Job Exam Question"
                        onPress={() => {
                            props.navigation.navigate('All Job Exam Question');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'All Job Exam Question'
                        }
                    />
                </>

                {/* Education News */}
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
                            Education News
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialCommunityIcons
                                name="book-education"
                                color={color}
                                size={30}
                            />
                        )}
                        label="PEC /JSC / SSC NEWS"
                        onPress={() => {
                            props.navigation.navigate('PEC JSC SSC News');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'PEC JSC SSC News'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialCommunityIcons
                                name="book-education"
                                color={color}
                                size={30}
                            />
                        )}
                        label="HSC News"
                        onPress={() => {
                            props.navigation.navigate('HSC News');
                        }}
                        focused={props.state.routeNames[props.state.index] === 'HSC News'}
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialCommunityIcons
                                name="book-education"
                                color={color}
                                size={25}
                            />
                        )}
                        label="NATIONAL UNIVERSITY"
                        onPress={() => {
                            props.navigation.navigate('National University News');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] ===
                            'National University News'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <MaterialCommunityIcons
                                name="book-education"
                                color={color}
                                size={30}
                            />
                        )}
                        label="PUBLIC UNIVERSITY"
                        onPress={() => {
                            props.navigation.navigate('Public University News');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] ===
                            'Public University News'
                        }
                    />
                </>

                {/*Education Board Result */}
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
                            Education Board Result
                        </Text>
                    </View>

                    <DrawerItem
                        icon={({ color }) => (
                            <Foundation name="results" color={color} size={30} />
                        )}
                        label="PEC RESULT"
                        onPress={() => {
                            props.navigation.navigate('PEC JSC Result');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'PEC JSC Result'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <Foundation name="results" color={color} size={30} />
                        )}
                        label="JSC/SSC/HSC RESULT"
                        onPress={() => {
                            props.navigation.navigate('SSC HSC Result');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] === 'SSC HSC Result'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <Foundation name="results" color={color} size={30} />
                        )}
                        label="National Result Check"
                        onPress={() => {
                            props.navigation.navigate('Honours Result Check');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] ===
                            'Honours Result Check'
                        }
                    />

                    <DrawerItem
                        icon={({ color }) => (
                            <Foundation name="results" color={color} size={30} />
                        )}
                        label="Or National Result Check"
                        onPress={() => {
                            props.navigation.navigate('Degree Results Check');
                        }}
                        focused={
                            props.state.routeNames[props.state.index] ===
                            'Degree Results Check'
                        }
                    />
                </>

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