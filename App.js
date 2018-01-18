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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPhones } from './app/Selectors/selectors';
import { getData } from './app/Actions/mainActions';

class App extends Component {

	componentWillMount() {
		this.props.getPhones();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>
						GOOD STORE
					</Text>
				</View>
				<ItemList items={this.props.phones}/>
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


function mapStateToProps(state) {
	return {
		phones: getPhones(state),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPhones: bindActionCreators(getData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
