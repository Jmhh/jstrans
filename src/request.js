const LoginAPI = {
	// 获取验证码
	phoneCode: { url: '/bjzz-auth/auth-app/phone-code/:id', method: 'get' },
	//APP注册登录
	appRegister: { url: '/bjzz-auth/auth-app/app-register', method: 'post' },
	//APP登录
	appLogin: { url: '/bjzz-auth/auth-app/app-login', method: 'post' },
	//APP找回密码-重置密码
	resetPassword: {
		url: '/bjzz-auth/auth-app/app-reset-password',
		method: 'put',
	},
	//APP设置新密码
	setPassword: { url: '/bjzz-auth/auth-app/app-set-password', method: 'post' },
	//APP验证密码是否正确
	verifyPassword: {
		url: '/bjzz-auth/auth-app/app-verify-password',
		method: 'post',
	},
	//APP校验验证码是否正确
	verifyPhoneCode: {
		url: '/bjzz-auth/auth-app/app-verify-phone-code',
		method: 'post',
	},
}

class baseFetch {
	constructor(defaultOptions = {}) {
		const defaultHeader = defaultOptions.header || {}
		if (defaultOptions.header) {
			delete defaultOptions.header
		}
		this.instance = (requestOptions, method) =>
			new Promise(function (resolve, reject) {
                let { url, data = undefined, options } = requestOptions
                console.log(requestOptions)
			})
	}
	get(url, data = undefined, options = {}) {
		options.header = {
			'content-type': 'application/x-www-form-urlencoded',
		}
		return this.instance({ url, data, options }, 'GET')
	}
	post(url, data = undefined, options = {}) {
		return this.instance({ url, data, options }, 'POST')
	}
	put(url, data = undefined, options = {}) {
		return this.instance({ url, data, options }, 'PUT')
	}
	delete(url, data = undefined, options = {}) {
		return this.instance({ url, data, options }, 'GET')
	}
}

const bindMethodToFetch = (moduleInstance, method) => {
	return function (API, data, config = {}) {
		return moduleInstance[method](API, data, config)
	}
}

const mapParamsToUrl = (url, params = '') => {
	if (typeof url !== 'string') {
		throw new Error(`url ${url} 应该是URL字符串`)
	}
	return url.replace(/:(\w+)/gi, params)
}

function createModule(APIs = {}) {
	return (module) => {
		const keys = Object.keys(APIs)
		if (!keys.length) {
			console.warn('APIs为空')
			return
		}
		const instance = module.prototype || module
		keys.forEach((name) => {
			let API = APIs[name]
			let requestMethod = undefined
			if (API instanceof Object) {
				requestMethod = API.method
				API = API.url
			}
			if (!API) {
				console.warn(`${name}地址无效`)
				return
			}
			if (!requestMethod) {
				console.warn(`${name}未知的请求方法`)
				return
			}
			let func = bindMethodToFetch(instance, requestMethod)
			instance[name] = function () {
				let args = Array.prototype.slice.call(arguments)
				if (API.indexOf('/:') >= 0) {
					if (args.length == 0) {
						console.warn(`${name}path值为空`)
						return
					}
					let params = args[0]
					args = args.slice(1)
					if (params instanceof Object) {
						let key = Object.keys(params)
						params = params[key[0]] || ''
					} else if (typeof params !== 'string') {
						console.warn(`${name}请传入字符串或对象的path值`)
					}
					API = mapParamsToUrl(API, params)
				}
				return func && func.apply(instance, [API].concat(args))
				//return instance[requestMethod](API, data, config)
			}
		})
	}
}

class UserInfoFetch extends baseFetch {
	constructor() {
		super()
		createModule(LoginAPI)(this)
	}
}

const queryTest = new UserInfoFetch()
queryTest.phoneCode({id: 11111})
console.log(queryTest)
queryTest.phoneCode({id: 22222})
console.log(queryTest)