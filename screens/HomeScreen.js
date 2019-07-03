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

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/header-bg.png')} style={{height: '60%'}}>
                <View style={styles.customHeader}>
                    <Text style={styles.titleHeader}>VOV DEALS</Text>
                </View>
                <HotDealsCarousel></HotDealsCarousel>
            </ImageBackground>
            <View style={styles.contentContainer}>
                <Text style={styles.TextHeader}>Categories</Text>
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
