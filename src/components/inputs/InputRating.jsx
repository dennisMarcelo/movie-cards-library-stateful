import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { callback, stateValue } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          min={ 0 }
          max={ 5 }
          step={ 0.1 }
          type="number"
          id="rating"
          data-testid="rating-input"
          value={ stateValue }
          onChange={ callback }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  callback: PropTypes.func.isRequired,
  stateValue: PropTypes.number.isRequired,
};

export default InputRating;
