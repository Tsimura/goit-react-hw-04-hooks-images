import PropTypes from 'prop-types';
import { GalleryItemWrapper } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onImageClick,
}) => {
  return (
    <GalleryItemWrapper>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onImageClick(largeImageURL);
        }}
      />
    </GalleryItemWrapper>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
