import React from 'react'
import ListItems from '../containers/ListItems'
import FilterItems from '../containers/FilterItems'

const Search = (x) => (
  <div>
    <div>
      <FilterItems />
    </div>
    <div>Items:</div>
    <ListItems />
  </div>
)

export default Search
