# Build Log [React Auth]

## 1) set up github

```
https://github.com/masonkimm/react-auth
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

## 3)

root> auth-react>> touch .env.local

- setup env file with firebase SDK

* template: REACT*APP*[namegoeshere]

## 4)

root> auth-react>> touch firebase.js

## 5)

NPM installs

```
npm i
* firebase
* boostrap
* react-bootstrap
* react-router-dom
```

## 6)

root> components> Signup.js

- import packages

## 7)

root> contexts> AuthContext.js

## 8)

firebase> authentication> user > to check for registered users

## 9)

react-router-dom>> app.js>>

- import BrowerRouter as Router, Switch, and Route, Link, useHistory
