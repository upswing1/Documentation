## Android (Firebase Cloud Messaging - FCM)

### Configuration Parameters

To configure FCM for sending push notifications, you typically need the following parameters:

### Server Key (string serverKey)
- This is the API key provided by Firebase.
- It is used to authenticate your server with FCM.
- You can obtain the server key from the Firebase Console under the project settings.

### Device Token

The `deviceToken` (often referred to as a registration token) is a unique identifier that represents a device or application instance to the push notification service. Here's what the `deviceToken` represents for Android:

- **Registration Token**: A unique token assigned by FCM to each app instance on a device.
- **Usage**: This token is used to send notifications to a specific app instance on an Android device.

### How to Obtain

The app registers with FCM and receives the token from the Firebase service. This is typically done during the initial setup of the app or during a specific registration process within the app.

### Example Configuration and Usage

When configuring and sending a notification, the `serverKey` and `deviceToken` are used to target the specific Android device/app instance.

#### Configuration

```csharp
var gcmConfig = new GcmConfiguration("YOUR_SERVER_KEY");
_gcmBroker = new GcmServiceBroker(gcmConfig);
