import { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./CustomModal.css";

Modal.setAppElement("#modal-form");

const customStyles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    boxShadow: "10px 10px 5px #aaaaaa",
    border: "1px solid gray",
    transform: "translate(-50%, -50%)",
  },
};

const CustomModal = ({ fetchData }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
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
    <div className="modal-container">
      <button onClick={openModal} className="add-product-btn">
        <i className="material-icons plus-icon">&#xe147;</i>Add New Product
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form className="form-control" onSubmit={handleSubmit(addProduct)}>
          <input placeholder="name..." {...register("name")} required />
          <input placeholder="price..." {...register("price")} required />
          <textarea
            placeholder="description..."
            {...register("description")}
            required
          />
          <input
            placeholder="url image..."
            {...register("urlImage")}
            required
          />
          <div className="btn-group">
            <button onClick={addProduct} className="submit-btn">
              add product
            </button>
            <button onClick={closeModal} className="cancel-btn">
              close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CustomModal;
