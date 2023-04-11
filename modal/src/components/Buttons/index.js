import React, { useContext } from 'react';
import { Button } from '@mui/material';
import {ModalContext, ModalProvider} from '../../contexts/modal/index.js';
import Modalfirst from '../Modal/Template/Modal1/index';
import Modalsecond from '../Modal/Template/Modal2/index';

export default () => {
    const {addModal} = useContext(ModalContext);
  
    const handleModalClose = (data) => {
      console.log('Modal closed with data:', data);
    };
  
    const handleOpenModal1 = () => {
      addModal({
        key: 'modal1',
        open: true,
        title: 'Modal 1',
        data: { message: 'Hello from Modal 1!' },
        content: <Modalfirst />,
        onClose: handleModalClose
      });
    };
  
    const handleOpenModal2 = () => {
      addModal({
        key: 'modal2',
        open: true,
        title: 'Modal 2',
        data: { message: 'Hello from Modal 2!' },
        content: <Modalsecond />,
        onClose: handleModalClose
      });
    };
  
    return (
      <>
        <Button variant="contained" onClick={handleOpenModal1}>
            Open Modal 1
          </Button>
          <Button variant="contained" onClick={handleOpenModal2}>
            Open Modal 2
          </Button>
      </>
    )
  }