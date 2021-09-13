/**
 * 装饰器模式
 *
 *
 * */

//  装饰器
const Decorator = function (old) {
	this.oldWrite = old.writeChinese
	this.writeEnglish = function () {
		console.log('写英文')
	}
	this.newWrite = function () {
		this.oldWrite()
		this.writeEnglish()
	}
}

const Person = function () {
	this.writeChinese = function () {
		console.log('我只会写中文')
	}
}

const pty = new Person()
const decorator = new Decorator(pty)
decorator.newWrite()

