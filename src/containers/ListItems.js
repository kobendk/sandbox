import {
	connect
} from 'react-redux'

import dataSelector from '../selectors/data-selector';
import ItemList from '../components/ItemList'

const mapStateToProps = (state) => ({
	items: dataSelector(state),
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
})

const ListItems = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemList)

export default ListItems
