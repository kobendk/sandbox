
import request from 'superagent'

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
	case 'GET_DATA':
		request
			.get('/test.json')
			.end((err, res) => {
				if (err) {
					console.log(err)
					return next({
						type: 'GET_DATA_ERROR',
						err
					})
				}
				const data = JSON.parse(res.text)
				next({
					type: action.responseType,
					data
				})
			})
		break
	default:
		break
	}

};

export default dataService
