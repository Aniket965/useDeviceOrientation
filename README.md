## useDeviceOrientation
> subscribes to deviceOrientationEvent

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)

## Install

 - NPM
```sh
npm install usedeviceorientation --save
```
 - Yarn
```sh
yarn add usedeviceorientation 
```

## Usage

```js
import useDeviceOrientation from 'usedeviceorientation';

function yourComponent() {
  let orientation = useDeviceOrientation();
// { 
//     absolute: DeviceOrientationEvent.absolute,
//     alpha: DeviceOrientationEvent.alpha,
//     beta: DeviceOrientationEvent.beta,
//     gamma: DeviceOrientationEvent.gamma
// }

  // ...
}
```