/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import ItemList from './app/Components/ItemsList';
import Footer from './app/Components/Footer';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>
						GOOD STORE
					</Text>
				</View>
				<ItemList/>
				<Footer/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	header: {
		backgroundColor: '#f4424e',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerText: {
		color: '#fff',
		fontSize: 24,
		padding: 10,
		fontWeight: '600'
	}
});
