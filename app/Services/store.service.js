class StoreService {
	phones = [
		{
			id: 1,
			name: 'iPhone X',
			image: 'http://zhzh.info/_pu/107/83911675.jpg',
			price: 1000,
		},
		{
			id: 2,
			name: 'Galaxy S9',
			image: 'https://cdn.images.express.co.uk/img/dynamic/galleries/x701/312541.jpg',
			price: 900,

		},
		{
			id: 3,
			name: 'Pixel 2',
			image: 'https://blogs-images.forbes.com/gordonkelly/files/2017/07/untitled.5236.jpg',
			price: 1100,
		}
	];

	getData() {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.phones))
		}, 10);
	}
}

export default new StoreService();