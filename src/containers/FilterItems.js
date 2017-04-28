import {
	connect
} from 'react-redux'

import ItemFilter from '../components/ItemFilter'
import {
	setFilter
} from '../actions'

const mapStateToProps = (state) => ({
	filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filter) => {
    dispatch(setFilter(filter))
  }
})

const FilterItems = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemFilter)

export default FilterItems
