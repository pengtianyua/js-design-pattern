/**
 * 发布订阅模式
 *
 * 各模块相互独立
 * 存在一对多的依赖关系
 * 依赖模块不稳定、依赖关系不稳定
 * 各模块由不同的人员、团队开发
 * */

//  EventEmit
const EventEmit = function () {
	this.events = {}

	//  订阅
	this.on = function (name, cb) {
		if (this.events[name]) {
			this.events[name].push(cb)
		} else {
			this.events[name] = [cb]
		}
	}

	//  发布
	this.trigger = function (name, ...arg) {
		if (this.events[name]) {
			this.events[name].forEach(eventListener => {
				eventListener(...arg)
			})
		}
	}
}
