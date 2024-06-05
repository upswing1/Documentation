# Password Recovery Mechanism

## Introduction

This document outlines the mechanism used to recover a user's password in a secure and efficient manner. The process involves generating a unique token, validating it, and allowing the user to reset their password through a series of steps designed to ensure the security and integrity of the system.

## Token Generation

Tokens are generated using a secure method, such as `Guid.NewGuid()`. Each token is associated with a user's ID and stored in the database along with the creation time and expiration time (e.g., 1 hour).

## Token Storage

Tokens and their metadata (user ID, creation time, expiration time) are stored in a database table. This ensures that each token can be tracked and validated.

## Token Validation

When a token is received, it is validated by checking its existence in the database, matching the associated user ID, and ensuring it has not expired. Invalid or expired tokens result in an error.

## Token Invalidation

Once a token is used to reset the password, it is invalidated by removing it from the database to prevent reuse.

## Password Reset Flow

1. **User Requests Password Reset**: 
   - The user initiates a password reset by providing their registered email address.
   - The server finds the user by email and generates a unique token using `Guid.NewGuid()`.
   - The token is stored in the database along with the user ID and expiration time.
   - A reset link is constructed using the token, such as `http://localhost:9090/api/v1/internal/resetPwd/passwordreset/{token}`.
   - The reset link is sent to the user's email address.

2. **User Clicks the Reset Link**:
   - The user receives the email and clicks on the reset link.
   - The link directs the user to an endpoint on the server, such as `/api/v1/internal/resetPwd/passwordreset/{token}`, where `{token}` is the unique token.
   - The server extracts the token from the URL and validates it by checking the database for its existence, associated user ID, and expiration time.
   - If the token is valid, the server redirects the user to a password reset form within the application.

3. **User Resets Password**:
   - The user enters and confirms their new password on the password reset form.
   - The new password, along with the token, is submitted to the server.
   - The server validates the token again and, if valid, updates the user's password in the database.
   - The token is then invalidated to prevent reuse.
   - The user receives a confirmation that their password has been successfully reset.

This process ensures a secure and user-friendly password reset mechanism by using unique tokens to verify the identity of the user and prevent unauthorized access.
