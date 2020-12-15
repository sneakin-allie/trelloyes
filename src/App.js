import React from 'react';
import './App.css';
import List from './List'

class App extends React.Component {

  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const {store} = this.props
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

// Why does this have to be a class component and not a functional component like the rest?
// Why is static defaultProps used here?
// Explain 'const {store} = this.props'
// For the List props, why is 'key={list.id} header={list.header} cards={list.cardIds.map(id => store.allCards[id])}'? Where does 'list' come from? Why is the [id] in brackets?
