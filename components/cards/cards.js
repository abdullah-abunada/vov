import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import IconAndLabel from '../IconAndLabel';

export default class Cards extends Component {
	render() {
		return (
			<View>
				<View style={styles.card}>
					<Image
						source={require('../../assets/images/product.png')}
						style={{ height: 200, width: '95%', borderRadius: 10 }}
					/>

					<Text
						style={{
							padding: 15,
							fontWeight: 900,
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
					<IconAndLabel name="md-star" color="tintColor" text="4.5" style={styles.Ionicons} />
					<IconAndLabel name="md-star" color="pink" text="45%-70%" />
					<IconAndLabel name="md-star" color="red" text="VAELACHERY" />
				</View>
			</View>
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
