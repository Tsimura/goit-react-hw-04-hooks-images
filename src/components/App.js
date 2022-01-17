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
  const [images, setImages] = useState([]);
  const [imageValue, setImageValue] = useState('');
  const [currentPage, setСurrentPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleFormSubmit = imageValue => {
    setImageValue(imageValue);
    setСurrentPage(1);
    setImages([]);
    setError(null);
  };
  useEffect(() => {
    if (!imageValue) return;
    const fetchArrImages = () => {
      setLoading(true);
      imagesAPI
        .fetchImages(imageValue, currentPage)
        .then(images => {
          if (images.hits.length === 0) {
            toast.error('There is no result for your request!');
          }
          return images.hits;
        })
        .then(respImages => {
          setImages(prevImg => [...prevImg, ...respImages]);
          scrollToBottom();
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    };
    fetchArrImages();
  }, [currentPage, imageValue]);
  const onLoadMore = () => {
    setLoading(true);
    setСurrentPage(prevPage => prevPage + 1);
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  const handleGalleryItemClick = largeImageURL => {
    setLargeImage(largeImageURL);
    setShowModal(true);
  };
  const toggleModal = () => {
    setShowModal(prev => !prev);
    setLargeImage('');
  };
  return (
    <AppWrapper>
      <Searchbar onSubmit={handleFormSubmit} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={handleGalleryItemClick} />
          <Button onClick={onLoadMore} />
        </>
      )}
      {loading && (
        <MyLoader style={{ marginRight: 'auto', marginLeft: 'auto' }} />
      )}
      {showModal && (
        <ModalWindow onClose={toggleModal}>
          <img src={largeImage} alt="currentLargeImage" />
        </ModalWindow>
      )}
      {error && <h2>Sorry, something went wrong: {error.message}</h2>}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </AppWrapper>
  );
}
