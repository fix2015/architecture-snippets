import React, { useState, createContext } from 'react';
import MyModal from '../../components/Modal/index';


export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const addModal = (modal) => {
    setModals((prevModals) => [...prevModals, modal]);
  };

  const removeModal = (modal) => {
    modal.onClose(modal.data);
    setModals((prevModals) => prevModals.filter((m) => m.key !== modal.key));
  };

  const ModalManager = () => {
    return (
      <>
        {modals.map((modal) => (
          <MyModal
            key={modal.key}
            open={modal.open}
            onClose={(data) => removeModal({ ...modal, data })}
            title={modal.title}
            data={modal.data}
          >
            {modal.content}
          </MyModal>
        ))}
      </>
    );
  };

  return (
    <ModalContext.Provider value={{ addModal }}>
      {children}
      <ModalManager />
    </ModalContext.Provider>
  );
};

export const ModalContext = createContext({addModal: () => {}});
