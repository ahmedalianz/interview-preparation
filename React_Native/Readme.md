**Bridge**

The bridge facilitates communication between JavaScript code and native modules in a React Native application.

Old Architecture (JSON)

JS Code <============ /\Bridge\/ ====event======== Native Module

JS Code ========JS callback==== /\Bridge\/ ============> Native Module

when user interacts,(if Main thread is free) event is passed from native code to JS Code (if Js Thread is free) to run and return a callback if necessary to update the native module.

Bridge is responsible for serializing (JSON.stringify) and deserializing (JSON.parse) data as it moves between the JavaScript environment and native code, ensuring compatibility between the two.

New Architecture (RN : v0.68 and up) based on:

-JavaScript Interface (JSI) : replacement of the bridge for communication between JS and native code.

-CodeGen : type safety between both sides.

-Turbo Modules : no more need to initialize the native modules (bluetooth-geo Location) on app start significantly decreasing start-up time (any module will be loaded when required ).

-Fabric : new rendering engine making the shadow element tree shared between js and ui threads so straight interactions from both sides .also user interactions such as scrolling, gestures can be prioritized to be executed synchronously in the main thread. While API requests will be executed asynchronously

it works by exposing the native code to javascript so it can directly be executed

[Read More on Medium](https://medium.com/@mishraabhishek.11/react-native-new-architecture-937c76547b29)
