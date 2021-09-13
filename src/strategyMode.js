/**
 * 策略模式
 *
 * 各判断条件下的策略相互独立且可复用
 * 策略内部逻辑相对复杂
 * 策略需要灵活组合
 *
 * */

/**
 * @description 权限逻辑判断
 * */

//  维护权限列表
const jobList = ['FE', 'BE']

//  策略
const strategies = {
	checkRole: value => {
		return value === 'juejin'
	},
	checkGrade: value => {
		return value >= 1
	},
	checkJob: value => {
		return jobList.indexOf(value) > 1
	},
	checkEatType: value => {
		return value === 'eat melons'
	}
}

//  校验规则
const Validator = function () {
	this.cache = []

	//  添加策略事件
	this.add = function (value, method) {
		this.cache.push(() => {
			return strategies[method][value]
		})
	}

	//  检查
	this.check = function () {
		for (let i = 0; i < this.cache.length; i++) {
			let validFn = this.cache[i]
			let data = validFn()
			if (!data) {
				return false
			}
		}
		return true
	}
}

//  测试
let compose1 = function () {
	let validator = new Validator()
	const data1 = {
		role: 'juejin',
		grade: 3
	}
	validator.add(data1.role, 'checkRole')
	validator.add(data1.grade, 'checkGrade')
	return validator.check()
}

let compose2 = function () {
	let validator = new Validator()
	const data2 = {
		role: 'juejin',
		job: 'FE'
	}
	validator.add(data2.role, 'checkRole')
	validator.add(data2.job, 'checkJob')
	return validator.check()
}
