import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    View,
} from 'react-native';

import HotDealsCarousel from '../components/Carousel/HotDealsCarousel';
import Layout from '../constants/Layout'
import Colors from "../constants/Colors";
import ButtonIcon from '../components/CategoryButton/ButtonIcon'
import CustomIcon from '../components/CustomIcon';

const DATACATEGORY = [
    { id: 1, text: 'Bars & Pub', color: '#6F4EF2', icon: 'beer' },
    { id: 2, text: 'Clothing', color: '#4EF279', icon: 'shirt' },
    { id: 3, text: 'Salon & Spa', color: '#9D3EF1', icon: 'cut' },
    { id: 4, text: 'Food', color: '#EF0097', icon: 'pizza' },
    { id: 5, text: 'Health', color: '#FD6300', icon: 'heart' },
    { id: 6, text: 'Gym & Yoga', color: '#43B8FF', icon: 'fitness' },
    { id: 7, text: 'Accessories', color: '#2AD7EA', icon: 'walk' },
    { id: 8, text: 'Hotels', color: '#F5D142', icon: 'bed' },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/header-bg.png')} style={{ height: '60%' }}>
                <View style={styles.customHeader}>
                    <Text style={styles.titleHeader}>VOV DEALS</Text>
                    <CustomIcon name='search'/>
                </View>
                <HotDealsCarousel></HotDealsCarousel>
            </ImageBackground>
            <View style={styles.contentContainer}>
                <Text style={styles.TextHeader}>Categories</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, flexWrap: 'wrap' }}>
                    {DATACATEGORY.map(item => {
                        return <ButtonIcon key={item.id} color={item.color} icon={item.icon} text={item.text} />
                    })}
                </View>
            </View>
        </View>

    );
}

HomeScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    customHeader: {
        height: Layout.headerHeight,
        margin: 15,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentContainer: {
        marginRight: Layout.screenMargin,
        marginLeft: Layout.screenMargin,
        marginTop: -15
    },
    titleHeader: {
        fontFamily: 'poppins-regular',
        fontWeight: "bold",
        fontSize: 24,
        color: Colors.white
    },
    TextHeader: {
        fontFamily: 'poppins-regular',
        fontWeight: "bold",
        fontSize: 19,
    },
});
