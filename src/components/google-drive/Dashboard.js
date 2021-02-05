import React from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import AddFolderBtn from './AddFolderBtn';

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <Container fluid className="mt-3">
        <AddFolderBtn />
      </Container>
    </>
  );
}
