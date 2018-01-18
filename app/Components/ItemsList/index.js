import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native';
import Item from './Item';

export default class ItemList extends Component {
	render() {
		return (
			<ScrollView style={styles.itemList}>
				{this.props.items && this.props.items.map((item, i) => <Item
					value={item.name}
					image={item.image}
					key={i}
				/>)}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	itemList: {
		backgroundColor: '#eee',
		marginBottom: 100
	}
});