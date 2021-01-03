import PropTypes from "prop-types";
import React from 'react';

const DeleteShoppingItem = props => {
    return (
        <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
          Delete Last Item
        </button>
    );
}

DeleteShoppingItem.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  noItemsFound: PropTypes.func.isRequired
}

export default DeleteShoppingItem;