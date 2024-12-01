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
```
## **Responses**

### **Success Response**
- **Status Code**: `201 OK`
- **Content**:

```json
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
```
### **Error Response**
- **Status Code**: `400 Bad Request`
- **Content**:

```json
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
```

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



Here’s the updated version without tables for easy copying:

---

```markdown
# User Login Endpoint Documentation

## **Endpoint**
**`POST /users/login`**

---

## **Description**
This endpoint allows an existing user to log in by providing their email and password. Upon successful login, a JSON Web Token (JWT) is generated and returned, which can be used for authentication in subsequent requests.

---

## **Request Body**
The request must include a JSON object with the following fields:

- **email**: The email address of the user. Must be a valid email format.
- **password**: The password for the user account. Must be at least 8 characters long.

### **Example Request**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

---

## **Responses**

### **Success Response**
- **Status Code**: `200 OK`
- **Content**:
```json
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
```

---

### **Error Responses**

#### **400 Bad Request**
This response is returned when the validation rules are not met.

- **Content**:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "password must be at least 8 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### **401 Unauthorized**
This response is returned when the email or password is invalid.

- **Content**:
```json
{
  "error": "Invalid email or password"
}
```

---

## **Validation Rules**

- **Email**: Must be in a valid email format.
- **Password**: Must be at least 8 characters long.

---

## **Notes**
1. **Validation**: Ensure all validations are performed before processing the login request.
2. **Authentication**: 
   - The provided email must correspond to an existing user in the system.
   - If the user is not found or the password does not match, an error response will be returned.
3. **Security**: Passwords in the response are hashed for security purposes.

---
