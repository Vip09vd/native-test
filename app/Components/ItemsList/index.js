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
		const items = [
			{
				name: 'iPhone X',
				image: 'http://zhzh.info/_pu/107/83911675.jpg'
			},
			{
				name: 'Galaxy S9',
				image: 'https://cdn.images.express.co.uk/img/dynamic/galleries/x701/312541.jpg'

			},
			{
				name: 'Pixel 2',
				image: 'https://blogs-images.forbes.com/gordonkelly/files/2017/07/untitled.5236.jpg'
			}
		];
		return (
			<ScrollView style={styles.itemList}>
				{items.map((item, i) => <Item
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