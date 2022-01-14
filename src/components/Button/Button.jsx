import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';
const Button = ({ loadMoreImages, onClick }) => {
  const handleClick = async () => {
    await onClick();
    loadMoreImages();
  };
  return (
    <LoadMoreBtn type="button" onClick={handleClick}>
      Load more
    </LoadMoreBtn>
  );
};
Button.propTypes = {
  loadMoreImages: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
