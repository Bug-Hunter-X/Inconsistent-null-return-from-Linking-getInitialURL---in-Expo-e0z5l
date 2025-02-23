This bug occurs when using the Expo SDK's `Linking` API to handle deep links.  Sometimes, the `getInitialURL` method returns `null` even when a deep link is successfully opened. This is inconsistent and makes it hard to reliably handle deep links on app launch.