import React, { PropTypes } from 'react'

const Item = ({ id, name }) => (
  <li>
    {name}
  </li>
)

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Item
