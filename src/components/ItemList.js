import React, { PropTypes } from 'react'
import Item from '../components/Item'

const ItemList = ({ items, loading }) => (
  <ul>
    {loading ? 'Loading...': ''}
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
      />
    )}
  </ul>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ItemList
