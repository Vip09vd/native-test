import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	StyleSheet, Image,
	Dimensions, TouchableOpacity
} from 'react-native';

export default class Item extends Component {

	render() {
		return (
			<TouchableOpacity
				style={styles.item}
				activeOpacity={0.8}
				onPress={() => alert(`You choose ${this.props.value}`)}>
				<View style={styles.itemName}>
					<Text style={styles.itemNameText}>
						{this.props.value}
					</Text>
				</View>
				<View style={styles.imageWrapper}>
					<Image
						style={styles.itemImage}
						source={{uri: this.props.image}}
						resizeMode='contain'
					/>
				</View>
			</TouchableOpacity>
		);
	}
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
	item: {
		backgroundColor: 'white',
		height: 'auto',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 20,
		marginRight: 20,
		alignItems: 'center',
		flex: 1
	},
	itemName: {
		width: '100%',
		backgroundColor: 'rgba(244, 244, 50, .6)'
	},
	itemNameText: {
		fontSize: 20,
		padding: 10,
	},
	imageWrapper: {
		flex: 1
	},
	itemImage: {
		height: 200,
		width: win.width - 40,
		margin: 10
	}
});