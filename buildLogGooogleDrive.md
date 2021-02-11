# Build Log [Google Drive - Clone]

## 1) set up github

```
https://github.com/masonkimm/google-drive-clone
```

## 2) set up firebase

```
https://console.firebase.google.com/u/3/project/auth-development-2bea5/overview
```

- Auth-Development
  - Build>> Authentication>> Sign-in method>> email/pw: enabled
  - add web app>> name>> skip firebase hosting>>
- Auth-Production
  - Build >> Authentication >> Sign-in method >> email/pw: enabled
  - Build >> Authentication >> Authorized domains >> localhost: delete

## 3) Existing files and folder refatoring

- components>> mkdir authentication
- authentication>> touch CenteredContainer.js

## 4) Navbar

- components>> mkdir google-drive>> touch Dashboard.js

## 5) AddFolderBtn

- components>> google-drive>> touch AddFolderBtn

```
  npm i --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome
```

## 6) Firebase -> Firestore

- firebase.js>> refactor database information
- create database in firestore
- set output info

## 7) src>> mkdir hooks>> touch useFolder.js
