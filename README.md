# Inconsistent null return from Expo's Linking.getInitialURL()

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where it inconsistently returns `null` even when a deep link is successfully opened, making reliable deep link handling on app launch difficult. 

## Bug Description

The `Linking.getInitialURL()` method in Expo is supposed to return the initial URL that launched the application. However, in certain scenarios, it returns `null` despite a deep link being successfully processed.  This behavior is not consistent and leads to unpredictable application behavior.

## Reproduction

The `bug.js` file shows a minimal example demonstrating this inconsistent behavior. Run the app, open a deep link (using an emulator or a physical device), and note the inconsistent return value of `getInitialURL()`. 

## Proposed Solution

The `bugSolution.js` file offers a potential workaround by using `Linking.addEventListener` to listen for URL changes. This provides a more robust way to catch deep links even if `getInitialURL()` fails.