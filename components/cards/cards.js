import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IconAndLabel from '../IconAndLabel';
import color from '../../constants/Colors'

export default class Cards extends Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<View style={styles.card}>
					<Image
						source={require('../../assets/images/product.png')}
						style={{ height: 200, width: '95%', borderRadius: 10 }}
					/>

					<Text
						style={{
							padding: 15,
							fontWeight: '900',
							fontSize: 14,
							fontFamily: 'poppins-regular',
							textAlign: 'left',
							marginLeft: 12
						}}
					>
						CHECKPEA RESTURANT
					</Text>
				</View>
				<View style={styles.container}>
					<IconAndLabel name="star" color="#F1D542" text="4.5" style={styles.Ionicons} />
					<IconAndLabel name="pricetag" color="green" text="45%-70%" />
					<IconAndLabel name="bookmark" color="#F30095" text="VAELACHERY" />
				</View>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 50
	},
	card: {
		width: '95%',
		height: 150,
		justifyContent: 'center',
		alignSelf: 'center'
	}
});
