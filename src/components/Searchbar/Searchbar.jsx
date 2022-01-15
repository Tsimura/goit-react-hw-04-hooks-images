import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchbarWrapper, SearchFormWrapper } from './Searchbar.styled';
export default function Searchbar({ onSubmit }) {
  const [imageValue, setImageValue] = useState('');
  const handleNameChange = event =>
    setImageValue(event.currentTarget.value.toLowerCase());
  const handleSubmit = event => {
    event.preventDefault();
    if (imageValue.trim() === '') {
      toast.error('Enter the value of the request!');
      return;
    }
    onSubmit(imageValue);
    setImageValue('');
  };
  return (
    <SearchbarWrapper>
      <SearchFormWrapper onSubmit={handleSubmit}>
        <button type="submit">
          <BiSearchAlt size={30} color="#3f51b5" />
        </button>
        <input
          type="text"
          name="imageValue"
          value={imageValue}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchFormWrapper>
    </SearchbarWrapper>
  );
}
Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
