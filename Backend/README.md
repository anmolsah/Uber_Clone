# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their email, first name, last name, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned, which can be used for authentication in subsequent requests.

## Request Body
The request must include a JSON object with the following fields:

- **email**: The email address of the user. It must be a valid email format.
- **fullname**: An object containing:
  - **firstname**: The first name of the user. It must be at least 3 characters long.
  - **lastname**: The last name of the user. (Optional, but if provided, it must be at least 3 characters long.)
- **password**: The password for the user account. It must be at least 8 characters long.

### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword123"
}
Responses
Success Response
Status Code: 201 Created
Content:
json
Insert Code
Edit
Copy code
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com",
    "password": "hashed_password"
  }
}
Error Response
Status Code: 400 Bad Request
Content:
json
Insert Code
Edit
Copy code
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "firstname must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be at least 8 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

# Validation Rules

## Email
- Must be in a valid email format.
- Must be unique and not already registered in the system.

## First Name
- Must be at least 3 characters long.

## Password
- Must be at least 8 characters long.
- Will be hashed before storing in the database for security purposes.

# Notes
- Ensure all validations are performed before processing the registration..