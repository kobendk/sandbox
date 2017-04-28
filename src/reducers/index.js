import {
	combineReducers
} from 'redux'
import items from './items'
import loading from './loading'

const searchApp = combineReducers({
	loading,
	items
})

export default searchApp
