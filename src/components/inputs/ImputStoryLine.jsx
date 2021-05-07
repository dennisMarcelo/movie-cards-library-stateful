import React from 'react';
import PropTypes from 'prop-types';

class ImputStoryLine extends React.Component {
  render() {
    const { callback, stateValue } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          data-testid="storyline-input"
          cols="30"
          rows="10"
          onChange={ callback }
          value={ stateValue }
        >
          { stateValue }
        </textarea>
      </label>
    );
  }
}

ImputStoryLine.propTypes = {
  callback: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default ImputStoryLine;
