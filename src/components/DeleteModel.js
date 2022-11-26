import React from 'react'
import { Modal, Button } from "react-bootstrap";
 
const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, type, message }) => {
    const showDeleteModal = (type, id) => {
        setType(type);
        setId(id);
        setFruitMessage(null);
        setVegetableMessage(null);
     
        if (type === "fruit") {
          setDeleteMessage(`Are you sure you want to delete the fruit '${fruits.find((x) => x.id === id).name}'?`);
        } else if (type === "vegetable") {
          setDeleteMessage(`Are you sure you want to delete the vegetable '${vegetables.find((x) => x.id === id).name}'?`);
        }
     
        setDisplayConfirmationModal(true);
      };
     
      // Hide the modal
      const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
      };
     
      // Handle the actual deletion of the item
      const submitDelete = (type, id) => {
        if (type === "fruit") {
          setFruitMessage(`The fruit '${fruits.find((x) => x.id === id).name}' was deleted successfully.`);
          setFruits(fruits.filter((fruit) => fruit.id !== id));
        } else if (type === "vegetable") {
          setVegetableMessage(`The vegetable '${vegetables.find((x) => x.id === id).name}' was deleted successfully.`);
          setVegetables(vegetables.filter((vegetable) => vegetable.id !== id));
        }
        setDisplayConfirmationModal(false);
      };
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Cho o</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => confirmModal(type, id) }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default DeleteConfirmation;