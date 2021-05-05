import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary
          movies={ data }
        />
      </div>
    );
  }
}

export default App;
