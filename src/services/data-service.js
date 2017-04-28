
import request from 'superagent'

const dataService = ({ getState }) => next => action => {
	const state = getState();
	next(action)
	switch (action.type) {
	case 'GET_DATA':
		request
			.get('/test.json?text=' + (state.filter || ''))
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
					...action,
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
