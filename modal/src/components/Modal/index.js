import React, { useState, useContext } from 'react';
import { Button, Modal, Box } from '@mui/material';

const MyModal = ({ open, onClose, title, children, data }) => {
  const handleConfirm = () => {
    onClose(data);
  };

  return (
    <Modal open={open} onClose={() => onClose(data)}>
      <Box sx={{ width: 400, height: 400, bgcolor: 'background.paper', p: 2 }}>
        <h2>{title}</h2>
        {children}
        <Button variant="contained" onClick={() => onClose(data)}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default MyModal;