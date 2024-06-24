# Initialization Mechanism

## Introduction

This document outlines the initialization mechanism implemented in the Fleet Master application, detailing the overall flow expected during startup.

## Initialization Mechanism

### Automatic Access Code Registration for First-Time Users

First-time users are required to enter an access code and an organization name to be identified. Upon successful identification, the app will proceed with the startup.

### Password Policy and Security Questions

Once the customer has been identified in the previous step, a request is automatically sent to the server to retrieve the latest password policy and security questions based on a specific account number. This ensures that the application is up-to-date with the latest security measures.

### Automatic User Registration

The app will check if a user for that account is registered. If the user is not registered, the application will open a registration form on a new page, allowing the user to complete the registration process.

### Login

Once a user is registered, the Login page will become accessible, allowing the user to log in to the application.

### Network Page

If at any point there is a failure in communicating with the server, the application will open a network status page to inform the user of the connectivity issue.

## Conclusion

The initialization mechanism in the Fleet Master application is designed to ensure a secure and seamless startup experience for users. By enforcing password policies, facilitating automatic registration, and handling network issues gracefully, the application aims to provide a robust and user-friendly environment. This document provides an overview of the steps involved in the initialization process, ensuring that all users are guided through the necessary security and setup procedures upon starting the application.

## Flow of Operation

![On board sequence diagram](/img/SD-AdminOnBoard.png)

### Step 1: Initialization Mechanism

1. **FleetMaster App**:
   - The driver launches the FleetMaster app.
   - An automated system checks if it is the first time the app is being started.
   - If it is the first start attempt, the app proceeds to the access code registration screen.

### Step 2: Automatic Access Code Registration for First-Time Users

1. **FleetMaster App**:
   - The app displays a screen prompting the user to enter an access code and an organization name.
   - The user inputs the access code and the organization name.
   - The app sends the access code and organization name to the server for verification.

2. **Server**:
   - The server verifies the access code and organization name.
   - Upon successful verification, the server provides the account number to the app.

### Step 3: Password Policy and Security Questions

1. **FleetMaster App**:
   - The app uses the retrieved account number to request the latest password policy and security questions from the server.

2. **Server**:
   - The server sends the latest password policy and security questions based on the specific account number.
   - The app stores this information for use during user registration.

### Step 4: Automatic User Registration

1. **FleetMaster App**:
   - The app checks if a user for the retrieved account number is already registered.
   - If the user is not registered, the app opens a registration form on a new page.
   - The user completes the registration process by providing necessary details, setting up security questions, and creating a password according to the latest policy.
   - The app submits the registration details to the server.

2. **Server**:
   - The server processes the registration details and confirms the successful registration of the user.
   - The app securely stores the user credentials.

### Step 5: Login

1. **FleetMaster App**:
   - The Login page becomes accessible once a user is registered.
   - The user enters their username and password on the Login page.
   - The app sends the login credentials to the server for verification.

2. **Server**:
   - The server verifies the login credentials.
   - Upon successful verification, the user gains access to the application's features and functionalities.

### Step 6: Network Page

1. **FleetMaster App**:
   - The app continuously monitors the network status during its operation.
   - If there is a failure in communicating with the server, the app detects the connectivity issue.
   - The app opens a network status page to inform the user of the connectivity issue.
   - The user is provided with options to retry the connection or seek help.

   