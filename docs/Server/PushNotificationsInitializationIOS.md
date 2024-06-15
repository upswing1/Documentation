## iOS (Apple Push Notification Service - APNs)

### Configuration Parameters

To configure APNs for sending push notifications, you typically need the following parameters:

### Certificate Path (string certificatePath)
- This is the path to the APNs certificate file (typically a `.p12` or `.pem` file).
- The certificate is used to authenticate your server with APNs.
- You can obtain the certificate from the Apple Developer Portal.

### Certificate Password (string certificatePassword)
- This is the password for the APNs certificate.
- It is used in conjunction with the certificate to authenticate your server with APNs.

### Device Token

The `deviceToken` (often referred to as a device token) is a unique identifier that represents a device or application instance to the push notification service. Here's what the `deviceToken` represents for iOS:

- **Device Token**: A unique token assigned by APNs to each app instance on a device.
- **Usage**: This token is used to send notifications to a specific app instance on an iOS device.

### How to Obtain

The app registers with APNs and receives the token from the Apple service. This is typically done during the initial setup of the app or during a specific registration process within the app.

### Example Configuration and Usage

When configuring and sending a notification, the `certificatePath`, `certificatePassword`, and `deviceToken` are used to target the specific iOS device/app instance.

#### Configuration

```csharp
var apnsConfig = new ApnsConfiguration(ApnsConfiguration.ApnsServerEnvironment.Sandbox, "PATH_TO_YOUR_P12_CERT", "YOUR_CERT_PASSWORD");
_apnsBroker = new ApnsServiceBroker(apnsConfig);
