/**
 * 责任链模式
 *
 * 你负责的是一个完整流程，或你只负责流程中的某个环节
 * 各环节可复用
 * 各环节有一定的执行顺序
 * 各环节可重组
 * */

/**
 * @description 申请设备 选择收货地址 选择责任人
 * */

const Chain = function (fn) {
	this.fn = fn

	this.setNext = function () {
		//  do something
	}

	this.run = function () {
		//  do something
	}
}

//  测试
const applyDevice = function () {}
const chainApplyDevice = new Chain(applyDevice)

const selectAddress = function () {}
const chainSelectAddress = new Chain(selectAddress)

const selectChecker = function () {}
const chainSelectChecker = new Chain(selectChecker)

chainApplyDevice.setNext(chainSelectAddress).setNext(chainSelectChecker)
chainApplyDevice.run()
