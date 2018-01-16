import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.footer}>
				<TouchableOpacity style={styles.addButton}>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	footer: {
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
		left: 0,
		right: 0,
	},
	addButton: {
		backgroundColor: '#f4424e',
		width: 90,
		height: 90,
		borderRadius: 50,
		borderColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 8,
		marginBottom: 10,
		zIndex: 10
	},
	addButtonText: {
		color: '#fff',
		fontSize: 24
	}
});