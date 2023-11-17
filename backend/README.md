# Viio API Documentation

This documentation outlines the API created for Viio's technical test. The API consists of four main routes for user session management and product retrieval.

## Available Routes

### 1. `/user/sign-in`

- **Description**: Log in for an existing user.
- **HTTP Method**: `POST`
- **Input Parameters**:
  - `email` (string): User's email.
  - `password` (string): User's password.
- **Successful Response**:
  - Status Code 200 OK: Session successfully initiated.
  - Response Body: JSON object with success key and boolean value.
  - Response Headers: SetCookie Header to bring a better experience to developers and users.

### 2. `/user/sign-up`

- **Description**: Register a new user.
- **HTTP Method**: `POST`
- **Input Parameters**:
  - `email` (string): New email.
  - `password` (string): New user's password.
- **Successful Response**:
  - Status Code 201 Created: User successfully registered.
  - Response Body: JSON object with success key and boolean value.
  - Response Headers: SetCookie Header to bring a better experience to developers and users.

### 3. `/user/sign-out`

- **Description**: Log out the current user session.
- **HTTP Method**: `POST`
- **Input Parameters**: None (authentication is done through the session token).
- **Successful Response**:
  - Status Code 200 OK: Session successfully closed.

### 4. `/products`

- **Description**: Retrieve the list of products.
- **HTTP Method**: `GET`
- **Input Parameters**: None (authentication is done through the session token).
- **Successful Response**:
  - Status Code 200 OK: Products retrieved successfully.
  - Response Body: List of products.

#### Additional Note about `/products`

This endpoint internally makes a call to an external service outside the local API to obtain the data requested in the technical test. The local API acts as an intermediary between the client and the external service, securely providing the required information.
