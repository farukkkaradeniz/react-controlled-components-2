import React from 'react';
import PropTypes from 'prop-types';

const ShoppingItemList = props => {
    return (
        <div>
            <p className="items">Items</p>
            <ol className="item-list">
                {props.items.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ol>
        </div>
    );
}

ShoppingItemList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ShoppingItemList;