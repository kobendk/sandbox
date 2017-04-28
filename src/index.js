import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import searchApp from './reducers'
import Search from './components/Search'
import dataService from './services/data-service'
import './index.css'
let store = createStore(searchApp,{}, applyMiddleware(dataService))

render(
	<Provider store={store}>
	<Search/>
</Provider>, document.getElementById('root'))

store.dispatch({type: 'GET_DATA', responseType: 'GET_DATA_RECEIVED'})
