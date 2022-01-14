import PropTypes from 'prop-types';
import { Component } from 'react';
import toast from 'react-hot-toast';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchbarWrapper, SearchFormWrapper } from './Searchbar.styled';
class Searchbar extends Component {
  state = { imageValue: '' };
  handleNameChange = event => {
    this.setState({ imageValue: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageValue.trim() === '') {
      toast.error('Enter the value of the request!');
      return;
    }
    this.props.onSubmit(this.state.imageValue);
    this.setState({ imageValue: '' });
  };
  render() {
    return (
      <SearchbarWrapper>
        <SearchFormWrapper onSubmit={this.handleSubmit}>
          <button type="submit">
            <BiSearchAlt size={30} color="#3f51b5" />
          </button>
          <input
            type="text"
            name="imageValue"
            value={this.state.imageValue}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchFormWrapper>
      </SearchbarWrapper>
    );
  }
}
Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
export default Searchbar;
