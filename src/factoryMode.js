/**
 * @description: 工厂模式
 * @author: 彭天宇
 * @date: 2021-09-26 15:02
 */

function SuzukiCar(color) {
	this.color = color
	this.brand = 'Suzuki'
}

function HondaCar(color) {
	this.color = color
	this.brand = 'Honda'
}

function BMWCar(color) {
	this.color = color
	this.brand = 'BMW'
}

const BRANDS = {
	suzuki: 1,
	honda: 2,
	bmw: 3
}

function CarFactory() {
	this.create = function (brand, color) {
		switch (brand) {
			case BRANDS.suzuki:
				return new SuzukiCar(color)
			case BRANDS.honda:
				return new HondaCar(color)
			case BRANDS.bmw:
				return new BMWCar(color)
			default:
				break
		}
	}
}

//  测试
const carFactory = new CarFactory();
const cars = [];

cars.push(carFactory.create(1, 'brown'));
cars.push(carFactory.create(2, 'grey'));
cars.push(carFactory.create(3, 'red'));

function say() {
	console.log(`Hi, I am a ${this.color} ${this.brand} car`);
}

for (const car of cars) {
	say.call(car);
}
