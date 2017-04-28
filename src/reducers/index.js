import {
	combineReducers
} from 'redux'
import { filter1, filter2 } from './filter'
import items from './items'
import loading from './loading'


const searchApp = combineReducers({
	filter: filter1,
	loading,
	items
})

export default searchApp
