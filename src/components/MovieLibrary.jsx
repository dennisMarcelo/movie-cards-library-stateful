import React from 'react';
import data from '../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: data,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange = () => {

  }

  onBookmarkedChange = () => {

  }

  onSelectedGenreChange = () => {

  }

  NewCard = (teste) => {
    console.log(teste);
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />

        <MovieList movies={ movies } />
        <AddMovie NewCard={ this.NewCard } />
      </div>
    );
  }
}

export default MovieLibrary;
