# Adding a driver Mechanism

## Introduction

This document outlines the mechanism implemented in the Fleet Master application to add a user
and describes the overall flow on how to add a user.

## Initialization Mechanism

### Automatic Access Code Registration for First-Time Users

A company administrator will be able to add a driver to the system by providing the driver's "Driver license"
and sending a request to the server to initiate the on boarding system. 
- The initial packet will contain the
  - driver's license number
  - an email address
   - a mobile phone number
  - the account number also known as the company identifier
  - optionally the First and last name and DOB (basically the driver's info on the driver's license)

Idea is to scan the driver's license and extract the information from the driver's license and send it to the server to initiate the on boarding process.

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
