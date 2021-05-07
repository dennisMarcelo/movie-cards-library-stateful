import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { callback, stateValue } = this.props;
    return (

      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          data-testid="title-input"
          onChange={ callback }
          value={ stateValue }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  callback: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default InputTitle;
