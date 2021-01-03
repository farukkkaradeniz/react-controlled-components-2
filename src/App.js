import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateShoppingItem from './components/CreateShoppingItem';
import DeleteShoppingItem from './components/DeleteShoppingItem';
import ShoppingItemList from './components/ShoppingItemList';

class App extends React.Component {
  state = {
    items : []
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  onAddItem = (item) => {
    this.setState((prevState) => ({
      items : [...prevState.items,item]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateShoppingItem handleAddItem = {this.onAddItem}/>
        <DeleteShoppingItem noItemsFound = {this.noItemsFound} deleteLastItem = {this.deleteLastItem}/>
        <ShoppingItemList items = {this.state.items}/>
      </div>
    );
  }
}

export default App;
