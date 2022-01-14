import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrapper } from './ImageGallery.styled';
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryWrapper>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onImageClick={onImageClick}
        />
      ))}
    </ImageGalleryWrapper>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatUR: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGallery;
