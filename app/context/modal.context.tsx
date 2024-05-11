'use client';

import React, { createContext, useState } from "react";

export class ModalProps {
  modal!: React.ReactNode;
  openModal!: (value: React.ReactNode) => void;
  closeModal!: () => void;
}

export const ModalContext = createContext(new ModalProps());

export const ModalProvider = ({children}: {children: React.ReactNode}) => {

  const [modal, setModal] = useState<React.ReactNode>(null);

  const openModal = (value: React.ReactNode) => setModal(value);

  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider value={{
      openModal,
      closeModal,
      modal
    }}>
      {children}
    </ModalContext.Provider>
  )
}