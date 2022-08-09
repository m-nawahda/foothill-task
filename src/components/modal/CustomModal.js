import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./CustomModal.css";
Modal.setAppElement("#yourAppElement");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CustomModal = ({ fetchData }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addProduct = async (data) => {
    await fetch("https://62d6874451e6e8f06f0c0fb0.mockapi.io/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetchData();
    closeModal();
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="form-control" onSubmit={handleSubmit(addProduct)}>
          <input placeholder="name" {...register("name")} />
          <input placeholder="price" {...register("price")} />
          <input placeholder="description" {...register("description")} />
          <input placeholder="url image" {...register("urlImage")} />
          <button onClick={addProduct}>add product</button>

          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};

export default CustomModal;
