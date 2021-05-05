import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      allMovies: movies,
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange = ({ target: { type, value, id, checked } }) => {
    this.handleChange(type, value, id, checked);
    const { allMovies } = this.state;

    if (value !== '') {
      const globalRegex = new RegExp(`${value}*`, 'iu');
      const moviesFilted = allMovies.filter(({ title }) => globalRegex.test(title));
      this.setState({ movies: moviesFilted });
    }
  }

  onBookmarkedChange = ({ target: { type, value, id, checked } }) => {
    this.handleChange(type, value, id, checked);
  }

  onSelectedGenreChange = ({ target: { type, value, id, checked } }) => {
    this.handleChange(type, value, id, checked);
  }

  handleChange = (type, value, id, checked) => {
    if (type === 'checkbox') {
      this.setState({
        [id]: checked,
      });
    } else {
      this.setState({
        [id]: value,
      });
    }
  }

  NewCard = () => {

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
        <AddMovie onClick={ this.NewCard } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
