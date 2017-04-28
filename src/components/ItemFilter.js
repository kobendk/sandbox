import React, { PropTypes } from 'react'

const ItemFilter = ({filter, onFilterChange }) => (
  <input type="text" value={filter} onChange={(evt) => onFilterChange(evt.target.value)} />
)

export default ItemFilter
