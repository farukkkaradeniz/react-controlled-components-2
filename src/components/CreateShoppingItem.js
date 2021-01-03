import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* @extends {React.Component<{handleAddItem:Function.isRequired}>}
*/
/**
* @extends {React.Component<{handleAddItem:Function.isRequired}>}
*/
class CreateShoppingItem extends Component {
    state = {
        value : ''
    };

    handleChangeInput = event => { // burada handle change = event şeklinde tanımlayarak on change de eventi göndermeden yapabiliyoruz.
        this.setState({
            value : event.target.value
        });
        // Gelen input elementin value değeri target.value ile alınıyor.
    }

    submitForm = () => {
        this.props.handleAddItem(this.state.value);
        this.setState({value : ''});
    }

    isDisabledAddButton = () => {
        return this.state.value === '';
    }
  
    render() {
    return (
        <div>
            <input value = {this.state.value} onChange = {this.handleChangeInput}/>
            <button onClick = {this.submitForm} disabled={this.isDisabledAddButton()}> Add Item </button>
        </div>
    );
    }
}

CreateShoppingItem.propTypes = {
  handleAddItem: PropTypes.func.isRequired
}

export default CreateShoppingItem;
