import React from 'react';
import PropTypes from 'prop-types';
import InputRating from './InputRating';
import ImputStoryLine from './ImputStoryLine';
import InputImagePath from './InputImagePath';
import ImputSubtitle from './ImputSubtitle';
import InputTitle from './InputTitle';
import InputGenre from './InputGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
    });
  }

  setImputs = (callback) => {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    callback({ subtitle, title, imagePath, storyline, rating, genre });

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle callback={ this.handleChange } stateValue={ title } />
        <ImputSubtitle callback={ this.handleChange } stateValue={ subtitle } />
        <InputImagePath callback={ this.handleChange } stateValue={ imagePath } />
        <ImputStoryLine callback={ this.handleChange } stateValue={ storyline } />
        <InputRating callback={ this.handleChange } stateValue={ Number(rating) } />
        <InputGenre callback={ this.handleChange } stateValue={ genre } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.setImputs.bind(this, onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
