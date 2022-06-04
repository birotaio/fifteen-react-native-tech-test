# Fifteen React Native Tech Test

Technical test for React Native developer position at <a href="https://fifteen.eu/">Fifteen <img width="16px" src="https://fifteen.eu/favicon-32x32.png"/></a>

## Instructions

### Context

At Fifteen, we developed an admin web app in Vue, used to visualize and manage our bikes, trips, users and interact with our service – via our API – for support, operation, and maintenance purposes. This web app is hosted in both native iOS and Android mobile apps and is used for operators and technicians on the field. It can be seen as a PWA which communicates with native features such as camera, torch, etc., and a native SDK allowing to connect with a bike using **Bluetooth (BLE)**.

Sharing the same codebase for the desktop web app and the mobile apps was a true asset at first. However, there are two major drawbacks of this approach. First, the final UI/UX of the mobile app is complicated and does not address properly the day-to-day specific needs of operators and technicians on the field. Finally, the web app is not optimized for mobile devices and can be ultimately slow.

We thus decided to develop a cross-platform mobile app, targeting the native, using **React Native**.

### Technical test mission

Your mission is to develop a basic React Native app, alongside Typescript, on which you fetch and display bikes on a Mapbox map. You then need to use a native iOS and a native Android SDK which simulates the BLE connection to the bike, and offer the possibility to unlock and lock the bike. When tapping on a bike marker, you should display the bike’s properties and action buttons that offer connection/disconnection and unlock/lock.

### Required tasks

- Set up a project using React Native with Typescript.
- Display a Mapbox map.
- Fetch bikes from the API and display them on the map. Think of a relevant way to display the bike’s state.
- These bikes can be clicked to open more information and the BLE actions buttons.
- The app will use the [iOS](https://github.com/birotaio/fifteen-ios-sdk-ble-tech-test) and [Android](https://github.com/birotaio/fifteen-android-sdk-ble-tech-test) fake-BLE SDKs to simulate the BLE connection/disconnection and unlock/lock actions.

### A step further

It would be greatly appreciated if you implement the following feature:
- When connected to a bike with the BLE SDK, that latter will send some bike’s information, such as its battery level. As this battery level is the most up-to-date source of truth, you should update the bike state via the API with this battery level. It can be seen as a synchronization mechanism between the bike and the backend through the smartphone.

And besides adding anything that seems relevant to you, you can also pick some of the following features:
- Add a feature to toggle the `in_order` state of a bike.
- Add a feature to add a bike.
- Add sorting, searching, filtering features (see [mockapi.io/docs](https://mockapi.io/docs)) in order for the operator to easily see the bikes that need to be checked on the field.

## BLE SDKs

You will find the SDKs that simulate the BLE communication with a bike in the following repositories:
- iOS: [fifteen-ios-sdk-ble-tech-test](https://github.com/birotaio/fifteen-ios-sdk-ble-tech-test)
- Android: [fifteen-android-sdk-ble-tech-test](https://github.com/birotaio/fifteen-android-sdk-ble-tech-test)

## Mapbox

A Mapbox access token will be sent to you by email.

## API

We have mocked an API with JSON data using [mockapi.io](https://mockapi.io/).
For development purposes only, you can execute `node genbikes/index.mjs` to generate bikes data in _genbikes_ directory.

### Endpoint

The API URL for your test will be **sent to you by email**.
To interact with it, you can use the following methods:
```
GET    /bikes
GET    /bikes/:id
POST   /bikes
PUT    /bikes/:id
DELETE /bikes/:id
```
(see the [documentation](https://mockapi.io/docs)).

### Data models

The simple **bike** data model we retained is:
```ts
serial_number: string,
coordinates: [number, number],
in_order: boolean,
service_status: enum,
battery_level: number, // from 0 to 100%
```

And the `service_status` enum:
- `1`: free
- `2`: booked
- `3`: in use

## Discussion

When you finish and deliver the test, we will discuss and challenge:
- The technological choices
- The project architecture and underlying build processes
- The code quality
- The UI/UX choices
- What was missing in the API, what could be improved...
