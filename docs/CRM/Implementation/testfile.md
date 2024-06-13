
---
id: first-time-password-change
title: First-Time Password Change Mechanism with Token
---

## Overview

In many systems, the initial administrator account is created with a default password during the database seeding process. This default password must be changed upon the first login to ensure security. To enhance security and prevent various attacks, it is recommended to use a token-based mechanism for the first-time password change process.

## How the Mechanism Works

### Database Seeding:

- During the initial setup, the administrator account is created with a default password.
- The account is marked as requiring a password change (`IsFirstTimeLogin = true`).

### Client Initialization Check:

- When the client application starts, it checks if it is the first access by querying the `IsFirstTimeLogin` flag.

### Request Token from Server:

- If `IsFirstTimeLogin` is true, the client automatically requests a unique token from the server. This token will be used to authorize the password change request.

### User Enters New Password:

- The user is prompted to enter a new password.

### Change Password with Token:

- The client sends the new password along with the token to the server.
- The server verifies the token, ensuring it is valid and has not been used.
- If the token is valid, the server updates the password, marks the account as no longer requiring a first-time password change (`IsFirstTimeLogin = false`), and invalidates the token.

## Why Use a Token?

### Preventing Replay Attacks:

- Tokens help prevent replay attacks by ensuring that each password change request is unique and can only be used once. Even if an attacker intercepts a token, it cannot be reused after it has been invalidated.

### Adding a Layer of Security:

- Requiring a token adds an extra layer of security to the password change process. The token serves as an additional credential that must be verified by the server.

### Ensuring Request Origin:

- The token ensures that the password change request originates from the client application and not from an external or unauthorized source.

### Tracking and Logging:

- Tokens allow the system to track and log password change requests. This can be useful for auditing and detecting unusual activities.

### Synchronizing State Between Client and Server:

- Tokens help synchronize the state between the client and server, ensuring that both are aware of the user's requirement to change the password.
















# Test Password Recovery Mechanism Using MailKit

## Introduction

This document outlines the password recovery mechanism implemented in an application, detailing the generation, storage, and validation of tokens, and the process of resetting a user's password. Additionally, it describes why MailKit was chosen to send password reset emails and explains the classes and methods involved in this implementation.

## Password Recovery Mechanism

### Token Generation

Tokens are generated using a secure method, such as `Guid.NewGuid()`. Each token is associated with a user's ID and stored in the database along with the creation time and expiration time (e.g., 1 hour). This ensures that each token is unique and valid only for a limited period, enhancing security.

### Token Storage

Tokens and their metadata (user ID, creation time, expiration time) are stored in a database table. This structure ensures that each token can be tracked and validated efficiently. 

### Token Validation

When a token is received, it is validated by checking its existence in the database, matching the associated user ID, and ensuring it has not expired. If the token is invalid or expired, the system rejects the request, ensuring that only legitimate users can reset their passwords.

### Token Invalidation

Once a token is used to reset the password, it is invalidated by removing it from the database to prevent reuse. This step is crucial for maintaining the security and integrity of the password reset process.

### Password Reset Flow

1. **User Requests Password Reset**: 
   - The user initiates a password reset by providing their registered email address.
   - The server finds the user by email and generates a unique token.
   - The token is stored in the database along with the user ID and expiration time.
   - A reset link is constructed using the token, such as `http://localhost:9090/api/v1/internal/resetPwd/passwordreset/\{token\}`.
   - The reset link is sent to the user's email address.

2. **User Clicks the Reset Link**:
   - The user receives the email and clicks on the reset link.
   - The link directs the user to an endpoint on the server, such as `/api/v1/internal/resetPwd/passwordreset/\{token\}`, where `\{token\}` is the unique token.
   - The server extracts the token from the URL and validates it by checking the database for its existence, associated user ID, and expiration time.
   - If the token is valid, the server redirects the user to a password reset form within the application.

3. **User Resets Password**:
   - The user enters and confirms their new password on the password reset form.
   - The new password, along with the token, is submitted to the server.
   - The server validates the token again and, if valid, updates the user's password in the database.
   - The token is then invalidated to prevent reuse.
   - The user receives a confirmation that their password has been successfully reset.

This process ensures a secure and user-friendly password reset mechanism by using unique tokens to verify the identity of the user and prevent unauthorized access.

## Using MailKit

### Why MailKit?

MailKit was chosen for this implementation due to its robust features and ease of use. It is a popular and well-documented library for sending emails in .NET applications. MailKit supports modern email protocols and provides comprehensive functionality for sending emails, which is essential for implementing a reliable password recovery mechanism.

### How MailKit is Used

MailKit is used to send password reset emails containing the unique token. This ensures that users receive a secure link to reset their password. The email service integrates with MailKit to construct and send the emails.

### Classes and Methods Used

**1. EmailService**:
- **Purpose**: Responsible for sending emails using MailKit.
- **Key Methods**: 
  - `SendPasswordResetEmailAsync`: Constructs the email message, including the password reset link, and sends it using MailKit's SMTP client.

**2. TokenService**:
- **Purpose**: Handles the generation, validation, and invalidation of tokens.
- **Key Methods**:
  - `GenerateToken`: Generates a unique token and stores it in the database.
  - `ValidateToken`: Validates the token by checking its existence and expiration in the database.
  - `InvalidateToken`: Removes the token from the database after it has been used.

**3. UserService**:
- **Purpose**: Manages user-related operations.
- **Key Methods**:
  - `GetUserByEmailAsync`: Retrieves a user by their email address.
  - `GetUserByIdAsync`: Retrieves a user by their ID.
  - `UpdatePasswordAsync`: Updates the user's password in the database.

**4. PasswordResetController**:
- **Purpose**: Handles password reset requests.
- **Key Methods**:
  - `RequestPasswordReset`: Receives the password reset request, generates a token, and sends the reset email.
  - `ResetPassword`: Validates the token and redirects the user to the password reset form.
  - `ResetPassword (POST)`: Receives the new password, validates the token, updates the user's password, and invalidates the token.

## Conclusion

This document provides an overview of a secure and user-friendly password recovery mechanism, detailing the use of tokens for validation and the role of MailKit in sending password reset emails. By following these steps and utilizing the described classes and methods, you can ensure that the password reset process in your application is both efficient and secure.
