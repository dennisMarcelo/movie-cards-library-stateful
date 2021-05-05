import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { callback, stateValue } = this.props;
    return (

      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          data-testid="genre-input"
          onChange={ callback }
          value={ stateValue }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  callback: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default InputGenre;
