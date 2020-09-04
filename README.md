# Safran Test Application
REST API server built using Node/Express.js, Client Side built using React.js

## Registration(SignUp) API
Registers user and generates a token for automatic login after registration.

**API Address**: `host/api/auth/register`

**Request Format**: `JSON`

**Request Method**: `POST`

```
{
    "name": "Aryan Soni",
    "email": "aryan@git.com",
    "password": "123456",
    "phone": "8340505682",
    "username": "asb",
    "address": "Block - C, Devadan Hall, Christ University, Bangalore - 560074",
    "confirm": "123456"
}
```
**Validations -ExpressValidator**:
- `name` required field
- `email` required field
- `password` required field & minimum required Length 5
- `phone` required field
- `address` required field

**Response Format**: `JSON`
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjg1ZDlkOTg4OTA4MWVjNDQ4OWVlZiIsImlhdCI6MTU5NjQ4MDkyNiwiZXhwIjoxNTk2ODQwOTI2fQ.eTuk5C2-Er4hbOQBxXn-YRb4za4LASxLhVdezYTTKLI"
}
```

## Login(SignIn) API
Login user and generates a token for authorization

**API Address**: `host/api/auth/login`

**Request Format**: `JSON`

**Request Method**: `POST`

```
{
    "email": "aryan@git.com",
    "password": "123456"
}
```
**Validations -ExpressValidator**:
- `email` required field
- `password` required field

**Response Format**: `JSON`
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjg2ODVmNjc0MGY1MWU5Y2ZjM2ExZSIsImlhdCI6MTU5NjQ4NDAwNSwiZXhwIjoxNTk2ODQ0MDA1fQ.BaunpHWG1spxd54E2fDr6Ks1_qXZ-YO-prb-3Ch5kFs"
}
```

## Fetch All Profiles - API
return details of all registered users to the authenticated user

**API Address**: `host/api/users/teammates`

**Request Format**: `JSON`

**Request Method**: `GET`

**Response Format**: `JSON`
```
[
    {
        "date": "2020-09-04T04:03:42.920Z",
        "_id": "5f51c0312a74850ae42d4158",
        "username": "asb",
        "name": "Aryan Soni",
        "email": "aryan@git.com",
        "password": "$2a$10$5C2if0w05.3lkkeeYW9BPe0MOrWdiPv9rQTEPiQbjykFAL4HaKxpu",
        "address": "Block - C, Devadan Hall, Christ University, Bangalore - 560074",
        "phone": "8340505682",
        "avatar": "https://gravatar.com/avatar/f96d2d8fac12c5a9cc6a5dc136fff7e0?d=mm&r=pg&s=200",
        "__v": 0
    }
    .......more........
]
```

## Fetch Profile of Authenticated User - API
return details of the authenticated user

**API Address**: `host/api/me`

**Request Format**: `JSON`

**Request Method**: `GET`

**Response Format**: `JSON`
```
[
    {
        "date": "2020-09-04T04:03:42.920Z",
        "_id": "5f51c0312a74850ae42d4158",
        "username": "asb",
        "name": "Aryan Soni",
        "email": "aryan@git.com",
        "password": "$2a$10$5C2if0w05.3lkkeeYW9BPe0MOrWdiPv9rQTEPiQbjykFAL4HaKxpu",
        "address": "Block - C, Devadan Hall, Christ University, Bangalore - 560074",
        "phone": "8340505682",
        "avatar": "https://gravatar.com/avatar/f96d2d8fac12c5a9cc6a5dc136fff7e0?d=mm&r=pg&s=200",
        "__v": 0
    }
]
```