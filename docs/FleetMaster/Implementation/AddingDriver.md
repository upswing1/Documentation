# Add Driver Mechanism

## Overview

To ensure a secure and efficient process for adding drivers in our client-server application, we will define the interaction between the FleetMaster app, the FleetPilot app, and the server. This document outlines the flow of the operation and specifies the expectations for each client and the server responses.

## Flow of Operation

### Step 1: Fleet Manager Initiates Driver Addition

1. **FleetMaster App**:
   - The fleet manager opens the FleetMaster app and navigates to the "Add Driver" section.
   - The manager enters the driver’s details (e.g., name, email, phone number) and initiates the request to add a driver.
   (Idea is to scan the driver's license and extract the information from the driver's license and send it to the server to initiate the on boarding process.)

2. **Server**:
   - The server generates a unique company-wide registration code (if not already existing) and a driver-specific registration code.
   - The server sends the registration codes (company-wide and driver-specific) back to the FleetMaster app.
   - Optionally, the server can send an email or SMS to the driver with the registration codes and a link to download the FleetPilot app.

3. **FleetMaster App**:
   - The FleetMaster app displays a confirmation message with the driver’s registration code.
   - the notification success message is displayed to the fleet manager.
   

### Step 2: Driver Registers via FleetPilot App

4. **FleetPilot App**:
   - The driver opens the FleetPilot app and navigates to the registration screen.
   - The driver enters the company-wide registration code and their driver-specific registration code.

5. **Server**:
   - The server validates both registration codes.
   - If the codes are valid and not expired, the server allows the driver to proceed with creating their account (e.g., setting up a username and password).

6. **FleetPilot App**:
   - The driver completes the registration by providing additional required information (e.g., username, password).
   - The FleetPilot app sends this information to the server to complete the registration.

7. **Server**:
   - The server registers the driver, links them to the corresponding company, and stores their credentials securely.
   - The server sends a confirmation response to the FleetPilot app.

8. **FleetPilot App**:
   - The FleetPilot app displays a success message and logs the driver into the app.

## Server API Endpoints

### 1. Generate Registration Codes
- **Endpoint**: `POST /api/v1/drivers/add`
- **Request**:
  ```json
  {
    "driverName": "John Doe",
    "driverEmail": "johndoe@example.com",
    "driverPhone": "+1234567890",
    "companyId": 123
  }


## Detailed Steps and Server Responses

1. **FleetMaster App Initiates Driver Addition**:
   - **Request**: Send driver details to `POST /api/v1/drivers/add`.
   - **Response**: Receive company and driver registration codes.

2. **FleetPilot App Driver Registration**:
   - **Request**: Driver enters registration codes and sends them to `POST /api/v1/registration/validate-codes`.
   - **Response**: Receive validation response indicating if codes are valid or not.
   - **Request**: If valid, driver completes registration and sends details to `POST /api/v1/registration/register`.
   - **Response**: Receive confirmation of successful registration.

## Summary

This mechanism ensures that the process of adding and registering a driver is secure, user-friendly, and efficient. The use of both company-wide and driver-specific registration codes helps maintain security while ensuring that only authorized drivers can register with the system. The server handles the validation and registration processes, ensuring that all data is securely managed and stored.


### Mechanism Flow

A company administrator will be able to add a driver to the system by providing the driver's "Driver license"
and sending a request to the server to initiate the on boarding system. 
- The initial packet will contain the
  - driver's license number
  - an email address
   - a mobile phone number
  - the account number also known as the company identifier
  - optionally the First and last name and DOB (basically the driver's info on the driver's license)

?Idea is to scan the driver's license and extract the information from the driver's license and send it to the server to initiate the on boarding process.

The FleetMasterDriverController will handle the request and double check that the license number is unique and

The FleetMasterDriverController will handle the request and double check that the license number is unique and 
has not been already used. If the drivers license is unique, the server will then send automatically 
 	- an email to the driver or an 
	- SMS to the driver 
	with an access code and a company wide access code and a unique user registration code.

the driver will then be able 
with the access code. The driver will then be able to use the access code to register and create an account in the Fleet Master application.

address. The system will automatically send an email to the driver with an access code. The driver will then be able to use the access code to register and create an account in the Fleet Master application.
First-time users are required to enter an access code and an organization name to be identified. Upon successful identification, the app will proceed with the startup.

