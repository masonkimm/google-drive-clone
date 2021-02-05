import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { database } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function AddFolderBtn() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const { currentUser } = useAuth();

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
    setName('');
  }
  function handleSubmit(e) {
    e.preventDefault();
    //create a folder in db(firebase)
    database.folders.add({
      name: name,
      // parentId,
      userId: currentUser.uid,
      // path,
      createdAt: database.getCurrentTimeStamp(),
    });
    setName('');
    closeModal();
  }

  return (
    <>
      <Button onClick={openModal} variant="outline-primary" size="sm">
        <FontAwesomeIcon icon={faFolderPlus} />
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label> Folder Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="outline-primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
