import {
	connect
} from 'react-redux'

import ItemList from '../components/ItemList'

const getItemList = (items) => items;

const mapStateToProps = (state) => ({
	items: getItemList(state.items),
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
})

const ListItems = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemList)

export default ListItems
