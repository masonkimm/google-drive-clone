import React from 'react';
import Navbar from './Navbar';
import AddFolderBtn from './AddFolderBtn';
import FolderBreadCrumbs from './FolderBreadCrumbs';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import Folder from './Folder';
import File from './File';
import { useParams, useLocation } from 'react-router-dom';
import AddFileBtn from './AddFileBtn';

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );
  // console.log(childFolders);
  return (
    <>
      <Navbar />

      <Container fluid className="mt-3">
        <div className="d-flex align-items-center">
          <FolderBreadCrumbs currentFolder={folder} />
          <AddFileBtn currentFolder={folder} />
          <AddFolderBtn currentFolder={folder} />
        </div>
        {/* <AddFolderBtn currentFolder={folder} /> */}
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
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxWidth: '150px' }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
