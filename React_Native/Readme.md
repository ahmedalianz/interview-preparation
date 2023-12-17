**Bridge**

The bridge facilitates communication between JavaScript code and native modules in a React Native application.

JS Code <============ /\Bridge\/ ====event======== Native Module
JS Code ========JS callback==== /\Bridge\/ ============> Native Module

when user interacts,(if Main thread is free) event is passed from native code to JS Code (if Js Thread is free) to run and return a callback if necessary to update the native module.

Old Architecture (JSON)
Bridge is responsible for serializing (JSON.stringify) and deserializing (JSON.parse) data as it moves between the JavaScript environment and native code, ensuring compatibility between the two.
