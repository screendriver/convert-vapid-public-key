# convert-vapid-public-key

[![GitHub Actions status](https://github.com/screendriver/convert-vapid-public-key/workflows/CI/badge.svg)](https://github.com/screendriver/convert-vapid-public-key/actions)
[![codecov](https://codecov.io/gh/screendriver/convert-vapid-public-key/branch/main/graph/badge.svg)](https://codecov.io/gh/screendriver/convert-vapid-public-key)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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
  const registration = await navigator.serviceWorker.register('service-worker.js');
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: convertVapidKey('<your-base64-vapid-public-key>'),
  };
  const pushSubscription = await registration.pushManager.subscribe(subscribeOptions);
  // ...
}
```
