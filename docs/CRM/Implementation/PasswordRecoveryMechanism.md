# Password Recovery Mechanism Using MailKit

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
   - The user initiates a password reset by choosing one of the following options:
     - Their registered email address.
     - A phone number where a message can be received.
   - The server locates the user by the provided email address or phone number and generates a unique access code.
   - The access code is stored in the database along with the user ID and expiration time.
   - The server sends the access code via:
     - Email to the user's registered email address.
     - SMS to the user's registered phone number.

2. **User enters the Received Token**:
   - The user reads the received access code and enters it in the application.
	- If the access code is correct, the user is redirected to the password reset form
	- The user receives the token in an 
		- email and clicks on the reset link.
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
