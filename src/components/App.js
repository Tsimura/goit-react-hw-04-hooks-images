import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import MyLoader from './Loader/Loader';
import imagesAPI from '../services/images-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import ModalWindow from './Modal/Modal';
import { AppWrapper } from './App.styled';

export default function App() {
  const [imageValue, setImageValue] = useState('');
  // const [query, setQuery] = useState('');
  // const [largeImage, setLargeImage] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (imageValue === '') {
      return;
    }
    imagesAPI
      .fetchImages(imageValue)
      .then(resp => {
        console.log(resp.hits);
        return resp.hits;
      })
      .then(respImg => {
        console.log('respImg:', respImg);
        // setCurrentPage();
        return setImages(respImg);
      });
  }, [imageValue]);

  // const setCurrentPage = () => {
  //   setPage(prevState => prevState + 1);
  // };

  const handleFormSubmit = imageValue => setImageValue(imageValue);
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      <ImageGallery
        images={images}
        // onImageClick={this.handleGalleryItemClick}
      />
      {/* <Button loadMoreImages={getImageFetch} onClick={setCurrentPage} /> */}
    </>
  );
}

// ================================================
// class App extends Component {

//   state = {
//     imageValue: '',
//     largeImage: '',
//     images: [],
//     currentPage: 1,
//     loading: false,
//     error: null,
//     showModal: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevRequestValue = prevState.imageValue;
//     const nextRequestValue = this.state.imageValue;
//     const { images } = this.state;
//     if (prevRequestValue !== nextRequestValue) {
//       this.setState({ loading: true, images: [] });
//       this.getImageFetch();
//     }
//     if (prevState.images.length !== images.length) {
//       this.scrollToBottom();
//     }
//   }

// scrollToBottom = () => {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
// };

// handleFormSubmit = imageValue => {
//   this.setState({ imageValue });
// };

//   getImageFetch = () => {
//     const { imageValue } = this.state;
//     imagesAPI
//       .fetchImages(imageValue, this.state.currentPage)
//       .then(images => {
//         if (images.hits.length === 0) {
//           toast.error('There is no result for your request!');
//         }
//         this.setState(prevState => ({
//           images: [...prevState.images, ...images.hits],
//         }));
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ loading: false }));
//   };

// setCurrentPage = () => {
//   this.setState(prevState => ({
//     currentPage: prevState.currentPage + 1,
//   }));
// };

//   handleGalleryItemClick = largeImageURL => {
//     this.setState({ largeImage: largeImageURL, showModal: true });
//   };

//   toggleModal = () => {
//     this.setState(prevState => ({
//       showModal: !prevState.showModal,
//       largeImage: '',
//     }));
//   };

//   render() {
//     const { loading, images, largeImage, error, showModal } = this.state;
//     const showSearchResults = images.length;

//     return (
//       <AppWrapper>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         {showSearchResults > 0 && (
//           <>
// <ImageGallery
//   images={images}
//   onImageClick={this.handleGalleryItemClick}
// />
// <Button
//   loadMoreImages={this.getImageFetch}
//   onClick={this.setCurrentPage}
// />
//           </>
//         )}
//         {loading && (
//           <MyLoader style={{ marginRight: 'auto', marginLeft: 'auto' }} />
//         )}
//         {showModal && (
//           <ModalWindow onClose={this.toggleModal}>
//             <img src={largeImage} alt="currentLargeImage" />
//           </ModalWindow>
//         )}
//         {error && <h2>Sorry, something went wrong: {error.message}</h2>}
//         <Toaster
//           position="top-center"
//           reverseOrder={false}
//           toastOptions={{
//             duration: 1000,
//             style: {
//               background: '#363636',
//               color: '#fff',
//             },
//           }}
//         />
//       </AppWrapper>
//     );
//   }
// }
// export default App;
