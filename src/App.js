import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Cart from './components/shopping/cart';
import AddTodo from './components/todo/AddTodo';
import rootReducer from './reducers';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {
  state = {
    items : [
      {id : 1, name : 'Extra Cheese pizza', count: 0},
      {id : 2, name : 'Pizza', count: 0},
    ]
  }

  countChange = (item, counterType) => {
    let items = [...this.state.items];
    const idx = items.indexOf(item);
    items[idx] = {...item};
    if (counterType === 'incr') {
      items[idx].count++;
    } else if (counterType === 'decr' && item.count >= 1) {
      items[idx].count--;
    }
    this.setState({ items });
  }

  render() {
    let store = createStore(rootReducer, {});
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <Header totalItems= {this.state.items.filter(item => item.count > 0).length}/>
            <div className="container">
                <Route exact path="/cart" render={ () => <Cart items={this.state.items} countChange={this.countChange} /> } />
                <Route exact path="/todo" component={ AddTodo } />
              </div>
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}


export default App;
