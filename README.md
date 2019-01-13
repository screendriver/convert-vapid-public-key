# convert-vapid-public-key

[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue.svg)](https://www.typescriptlang.org)
[![Build Status](https://dev.azure.com/screendriver/convert-vapid-public-key/_apis/build/status/screendriver.convert-vapid-public-key?branchName=master)](https://dev.azure.com/screendriver/convert-vapid-public-key/_build/latest?definitionId=2?branchName=master)

To subscribe to [Web Push Notifications](https://developers.google.com/web/fundamentals/push-notifications/) you have to provide an Base64 application server key that needs to be converted to an [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array). This package helps you with the conversion from a Base64 string to an `Uint8Array`.

## Installation 🏗

```sh
$ npm install --save convert-vapid-public-key
```

or if you use [Yarn](https://yarnpkg.com) 🐈

```sh
$ yarn add convert-vapid-public-key
```

## Usage 🔨

```ts
import convertVapidKey from 'convert-vapid-public-key';

async function subscribe() {
  const registration = await navigator.serviceWorker.register(
    'service-worker.js',
  );
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: convertVapidKey('<your-base64-vapid-public-key>'),
  };
  const pushSubscription = await registration.pushManager.subscribe(
    subscribeOptions,
  );
  // ...
}
```
