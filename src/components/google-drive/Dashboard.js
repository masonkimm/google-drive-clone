import React from 'react';
import Navbar from './Navbar';
import AddFolderBtn from './AddFolderBtn';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import Folder from './Folder';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);
  console.log(childFolders);
  return (
    <>
      <Navbar />

      <Container fluid className="mt-3">
        <AddFolderBtn currentFolder={folder} />
        {/* {folder && <Folder folder={folder}></Folder>} */}

        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: '150px' }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
