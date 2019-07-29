import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
} from 'react-native';
import { connect } from 'react-redux'
import HotDealsCarousel from '../components/Carousel/HotDealsCarousel';
import Layout from '../constants/Layout'
import Colors from "../constants/Colors";
import ButtonIcon from '../components/CategoryButton/ButtonIcon'
import CustomIcon from '../components/CustomIcon';

import DataActions from '../redux/MyDataRedux'
import { Notifications } from 'expo';
import { registerForPushNotificationsAsync } from '../services/registerForPushNotificationsAsync'

const DATACATEGORY1 = [
    { id: 1, text: 'Bars & Pub', color: '#6F4EF2', icon: 'beer' },
    { id: 2, text: 'Clothing', color: '#4EF279', icon: 'shirt' },
    { id: 3, text: 'Salon & Spa', color: '#9D3EF1', icon: 'cut' },
    { id: 4, text: 'Food', color: '#EF0097', icon: 'pizza' },
];

const DATACATEGORY2 = [
    { id: 5, text: 'Health', color: '#FD6300', icon: 'heart' },
    { id: 6, text: 'Gym & Yoga', color: '#43B8FF', icon: 'fitness' },
    { id: 7, text: 'Accessories', color: '#2AD7EA', icon: 'walk' },
    { id: 8, text: 'Hotels', color: '#F5D142', icon: 'bed' },
];

export default class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    };

    constructor() {
        super();
        this.state = {
            notification: {},

        };
    }

    componentDidMount() {
        //this.props.getMyData();
        registerForPushNotificationsAsync();

        this._notificationSubscription = Notifications.addListener(this._handleNotification);

    }

    _handleNotification = (notification) => {
        this.setState({ notification: notification });
    };

    handleButtonIcon(id) {
        switch (id) {
            case 4: {
                return this.props.navigation.navigate('Category')
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/header-bg.png')} style={{ height: '60%' }}>
                    <View style={styles.customHeader}>
                        <Text style={styles.titleHeader}>VOV DEALS</Text>
                        <CustomIcon name='search' size={24} />
                    </View>
                    <HotDealsCarousel></HotDealsCarousel>
                </ImageBackground>
                <View style={styles.contentContainer}>
                    <Text style={styles.TextHeader}>Categories</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 10,
                        flexWrap: 'wrap'
                    }}>
                        {DATACATEGORY1.map(item => {
                            return <ButtonIcon _onPressButton={() => this.handleButtonIcon(item.id)} key={item.id}
                                color={item.color} icon={item.icon} text={item.text} />
                        })}
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 10,
                        flexWrap: 'wrap'
                    }}>
                        {DATACATEGORY2.map(item => {
                            return <ButtonIcon _onPressButton={() => this.handleButtonIcon(item.id)} key={item.id}
                                color={item.color} icon={item.icon} text={item.text} />
                        })}
                    </View>
                </View>
            </View>
        );
    }
}
/*
const mapStateToProps = (state) => {
    return {
        myData: state.myData.data,
        error: state.myData.error,
        fetching: state.myData.fetching,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMyData: () => dispatch(DataActions.dataRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
*/



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
