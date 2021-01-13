
const showToast = (msg = '提示') => {
	uni.showToast({
		icon: 'none',
		title: msg,
		mask: true,
		complete: () => {
			setTimeout(() => {
				uni.hideToast()
			}, 1500)
		},
	})
}

class baseFetch {
	constructor(defaultOptions = {}) {
		const defaultHeader = defaultOptions.header || {}
		if (defaultOptions.header) {
			delete defaultOptions.header
		}
		this.instance = (requestOptions, method) =>
			new Promise(function (resolve, reject) {
				//const baseURL = process.env.VUE_APP_URL
                const baseURL = '/test'
                console.log(requestOptions)
				// let { url, data = undefined, options } = requestOptions
				// let header = { ...options.header, ...defaultHeader }
                // console.log(url, data, header)
				// const token = store.state.user && store.state.user.token
				// if (token) {
				// 	header['hydosky-auth'] = 'Bearer ' + token
				// }
				// uni.showLoading({
				// 	title: '加载中',
				// })
				// uni.request({
				// 	url: baseURL + url,
				// 	method,
				// 	header,
				// 	...defaultOptions,
				// 	data,
				// 	timeout: 10000,
				// 	success: (res) => {
				// 		const status = res.data && res.data.success
				// 		if (status) {
				// 			resolve(res.data)
				// 		} else {
				// 			if (res.data.code === '401') {
				// 				showToast(res.data.msg)
				// 				uni.reLaunch({
				// 					url: 'login',
				// 				})
				// 			}
				// 			const message = res.data && res.data.msg
				// 			showToast(message)
				// 			reject({ msg: message, res: res.data })
				// 		}
				// 	},
				// 	fail: (res) => {
				// 		if (res.errMsg.indexOf('timeout') != -1) {
				// 			showToast('请求超时，请重试')
				// 		}
				// 		showToast(res.errMsg)
				// 		reject(res)
				// 	},
				// 	complete: () => {
				// 		uni.hideLoading()
				// 	},
				// })
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

export function createFetch(options) {
	return new baseFetch(options)
}

export default baseFetch