# React Native Boilerplate

This is a project template with batteries included to speed up project initiation.

## Features

*   react-native-router-flux
*   redux
*   eslint
*   code push
*   support .env with react-native-config

## Project Structure

```
.
├── README.md
├── __tests__
│   ├── index.android.js
│   └── index.ios.js
├── index.android.js
├── index.ios.js
├── package.json
├── src
│   ├── components
│   │   ├── NavBar
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Root
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── TabIcon
│   │       ├── index.js
│   │       └── styles.js
│   ├── containers
│   │   └── MainPage
│   │       ├── index.js
│   │       └── styles.js
│   ├── reducers
│   │   └── index.js
│   ├── scenes
│   │   └── index.js
│   └── stores
│       └── index.js
└── yarn.lock
```

## Development Flow

react-native packager

```
npm start
```

run on ios
```
react-native run-ios
```

run on android
```
react-native run-android
```
