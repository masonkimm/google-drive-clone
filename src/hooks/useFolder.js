import { useReducer, useEffect } from 'react';
import { database } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const ACTIONS = {
  UPDATE_FOLDER: 'update-folder',
  SELECT_FOLDER: 'select-folder',
  SET_CHILD_FOLDERS: 'set-child-folder',
  SET_CHILD_Files: 'set-child-files',
};

export const ROOT_FOLDER = { name: 'Root', id: null, path: [] };

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SELECT_FOLDER:
      return {
        folderId: payload.folderId,
        folder: payload.folder,
        childFiles: [],
        childFolders: [],
      };
    case ACTIONS.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      };
    case ACTIONS.SET_CHILD_FOLDERS:
      return {
        ...state,
        childFolders: payload.childFolders,
      };
    case ACTIONS.SET_CHILD_FILES:
      return {
        ...state,
        childFiles: payload.childFiles,
      };
    default:
      return state;
  }
}

export function useFolder(folderId = null, folder = null) {
  // using 'undefined' will output error in firebase

  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: [],
  });

  const { currentUser } = useAuth();

  //to run every time either folder id or folder changes
  useEffect(() => {
    dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folderId, folder } });
  }, [folderId, folder]);

  useEffect(() => {
    if (folderId == null) {
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER },
      });
    }
    database.folders
      .doc(folderId)
      .get()
      .then((doc) => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: database.formatDoc(doc) },
        });
        // alternative way
        // console.log(doc.data());
        // console.log(doc.id);
        // const formattedDoc = {
        //   id: doc.id,
        //   ...doc.data(),};
        // console.log(formattedDoc);
        // console.log(database.formatDoc(doc));
      })
      .catch((e) => {
        console.error(e);
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: ROOT_FOLDER },
        });
      });
  }, [folderId]);

  //to retrieve folders
  useEffect(() => {
    //firebase format
    return database.folders
      .where('parentId', '==', folderId)
      .where('userId', '==', currentUser.uid)
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        dispatch({
          type: ACTIONS.SET_CHILD_FOLDERS,
          payload: { childFolders: snapshot.docs.map(database.formatDoc) },
        });
      });
  }, [folderId, currentUser]);

  //to retrieve files
  useEffect(() => {
    //firebase format
    return (
      database.files
        .where('folderId', '==', folderId)
        .where('userId', '==', currentUser.uid)
        // .orderBy('createdAt')
        .onSnapshot((snapshot) => {
          dispatch({
            type: ACTIONS.SET_CHILD_FILES,
            payload: { childFiles: snapshot.docs.map(database.formatDoc) },
          });
        })
    );
  }, [folderId, currentUser]);

  return state;
}
