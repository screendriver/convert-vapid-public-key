# convert-vapid-public-key

[![GitHub Actions status](https://github.com/screendriver/convert-vapid-public-key/actions/workflows/continuous-integration.yaml/badge.svg)](https://github.com/screendriver/convert-vapid-public-key/actions)

To subscribe to [Web Push Notifications](https://developers.google.com/web/fundamentals/push-notifications/) you have to provide an Base64 application server key that needs to be converted to an [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array). This package helps you with the conversion from a Base64 string to an `Uint8Array`.

## Installation 🏗

```sh
$ npm install --save convert-vapid-public-key
```

## Usage 🔨

```ts
import convertVapidKey from "convert-vapid-public-key";

async function subscribe() {
	const registration = await navigator.serviceWorker.register("service-worker.js");
	const subscribeOptions = {
		userVisibleOnly: true,
		applicationServerKey: convertVapidKey("<your-base64-vapid-public-key>")
	};
	const pushSubscription = await registration.pushManager.subscribe(subscribeOptions);
	// ...
}
```
