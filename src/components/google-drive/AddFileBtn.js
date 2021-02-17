import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../contexts/AuthContext';
import { storage, database } from '../../firebase';
import { ROOT_FOLDER } from '../../hooks/useFolder';

export default function AddFileBtn({ currentFolder }) {
  const { currentUser } = useAuth();
  function handleUpload(e) {
    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;

    // const parentPath =
    //   currentFolder.path.length > 0 ? `${currentFolder.path.join('/')}` : '';

    const filePath =
      currentFolder === ROOT_FOLDER
        ? `${currentFolder.path.join('/')}/${file.name}`
        : `${currentFolder.path.join('/')}/${currentFolder.name}/${file.name}`;

    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      () => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          database.files.add({
            url: url,
            name: file.name,
            createdAt: database.getCurrentTimeStamp(),
            folderId: currentFolder.id,
            userId: currentUser.uid,
          });
        });
      }
    );
  }
  return (
    <label className="btn btn-outline-primary btn-sm m-0 mr-2">
      <FontAwesomeIcon icon={faFileUpload}></FontAwesomeIcon>
      <input
        type="file"
        onChange={handleUpload}
        style={{ opacity: 0, position: 'absolute', left: '-9999px' }}
      />
    </label>
  );
}
