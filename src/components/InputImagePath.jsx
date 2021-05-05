import React from 'react';
import PropTypes from 'prop-types';

class InputImagePath extends React.Component {
  render() {
    const { callback, stateValue } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath"
          data-testid="image-input"
          onChange={ callback }
          value={ stateValue }
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  callback: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default InputImagePath;
