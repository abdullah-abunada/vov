import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Colors from "../../constants/Colors";
import { sliderWidth, itemWidth } from './SliderEntry/SliderEntry.style';
import SliderEntry from './SliderEntry/SliderEntry';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const ENTRIES1 = [
    {
        title: 'GET 15% CASHBACK',
        subtitle: '@ CHICKPEA SALAD',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'GET 15% CASHBACK',
        subtitle: '@ CHICKPEA SALAD',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'GET 15% CASHBACK',
        subtitle: '@ CHICKPEA SALAD',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'GET 15% CASHBACK',
        subtitle: '@ CHICKPEA SALAD',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'GET 15% CASHBACK',
        subtitle: '@ CHICKPEA SALAD',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'GET 15% CASHBACK',
        subtitle: '@ CHICKPEA SALAD',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

export default class HotDealsCarousel extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    render() {
        const { slider1ActiveSlide } = this.state;
        return (
            <View>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
                />
                <Pagination
                    dotsLength={ENTRIES1.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={Colors.tintColor}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={'rgba(255, 255, 255, 0.75)'}
                    inactiveDotOpacity={0.4}
                    inactiveDotStyle={styles.inactiveDotStyle}
                    inactiveDotScale={0.6}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slider: {
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 5, // for custom animation
    },
    paginationContainer: {
        paddingVertical: 1,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 1
    },
    inactiveDotStyle: {
        width: 9,
        height: 9,
        borderRadius: 5,
        marginHorizontal: 1,
        borderColor: Colors.tintColor,
        borderWidth: 1
    }
});