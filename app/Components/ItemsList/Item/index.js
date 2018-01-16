import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	StyleSheet, Image
} from 'react-native';

export default class Item extends Component {

	render() {
		return (
			<View style={styles.item}>
				<View style={styles.itemName}>
					<Text style={{marginBottom: 10}}>
						{this.props.value}
					</Text>
				</View>
				<View>
					<Image
						style={{height: 180, padding: 10}}
						source={{uri: this.props.image}}
						resizeMode='contain'
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		height: 200
	},
	itemName: {
		height: 20,
		marginBottom: 10,
		padding: 10
	}
});