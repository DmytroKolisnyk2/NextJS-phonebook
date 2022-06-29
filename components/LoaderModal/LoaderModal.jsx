import React from 'react';
import Modal from './Modal/Modal';
import Loader from '../Loader/Loader';

const LoaderModal = () => {
  return (
   <>
      <Modal>
        <Loader />
      </Modal>
   </>
  );
}

export default LoaderModal;