## WnsConfiguration Initialization Parameters

The `WnsConfiguration` constructor typically requires the following parameters:

### Package Name (string packageName)
- This is the name of your application package that you registered with the Windows Dev Center.
- It is used to identify the application that is sending the notifications.

### Package Security Identifier (string packageSecurityIdentifier)
- This is a unique identifier for your application package.
- You obtain this identifier when you register your application with the Windows Dev Center.
- It is required for authentication purposes when sending notifications.

### Client Secret (string clientSecret)
- This is a secret key associated with your application.
- It is also obtained from the Windows Dev Center when you register your application.
- This secret is used in conjunction with the package security identifier to authenticate your application when sending notifications.

## Device Token

The `deviceToken` (often referred to as a device registration ID or push notification token) is a unique identifier that represents a device or application instance to the push notification service. Here's what the `deviceToken` represents for each platform:

### Windows (WNS - Windows Notification Service)
- **Channel URI**: A unique URI assigned by WNS to each app instance on a device.
- **Usage**: This URI is used to send notifications to a specific app instance on a Windows device.
