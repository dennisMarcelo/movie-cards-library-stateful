import React from 'react';
import PropTypes from 'prop-types';

class ImputSubtitle extends React.Component {
  render() {
    const { callback, stateValue } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          data-testid="subtitle-input"
          onChange={ callback }
          value={ stateValue }
        />
      </label>
    );
  }
}

ImputSubtitle.propTypes = {
  callback: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default ImputSubtitle;
