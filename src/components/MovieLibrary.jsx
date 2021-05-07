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

  filterForm = () => {
    const { searchText, movies, allMovies, bookmarkedOnly, selectedGenre } = this.state;
    let movieFilted;
    if (searchText !== '') {
      const globalRegex = new RegExp(`${searchText}*`, 'iu');
      movieFilted = movies
        .filter((this.filterSearch(globalRegex)));
    } else {
      movieFilted = allMovies;
    }

    if (bookmarkedOnly) {
      movieFilted = movieFilted.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre !== '') {
      movieFilted = movieFilted.filter(({ genre }) => genre === selectedGenre);
    }

    this.setState({
      movies: movieFilted,
    });
  }

  // a ideia é trazer a regex junto com a callback;
  filterSearch = (globalRegex) => (
    { title, subtitle, storyline },
  ) => globalRegex.test(title)
  || globalRegex.test(subtitle)
    || globalRegex.test(storyline)

  onSearchTextChange = ({ target: { type, value, id, checked } }) => {
    this.handleChange(type, value, id, checked);
  }

  onBookmarkedChange = ({ target: { type, value, id, checked } }) => {
    this.handleChange(type, value, id, checked);
  }

  onSelectedGenreChange = ({ target: { type, value, id, checked } }) => {
    this.handleChange(type, value, id, checked);
  }

  handleChange = (type, value, id, checked) => {
    if (type === 'checkbox') {
      this.setState({ [id]: checked }, () => this.filterForm());
    } else {
      this.setState({ [id]: value }, () => this.filterForm());
    }
  }

  addNewCard = (newCard) => {
    this.setState((afterState) => ({
      allMovies: [...afterState.allMovies, newCard],
      movies: [...afterState.movies, newCard],
    }));
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
        <AddMovie onClick={ this.addNewCard } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;

// conteudos utilizado
/*
  https://stackoverflow.com/questions/9655164/regex-ignore-case-sensitivity
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  https://reulison.com.br/regex/  (Expressões Regulares (RegEx))
  https://regex101.com/r/1jSD0F/1/  (utilizado para fazer testes)
  https://qastack.com.br/programming/7759237/how-do-i-pass-an-extra-parameter-to-the-callback-function-in-javascript-filter
*/
