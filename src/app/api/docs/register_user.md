REGISTER

This API endpoint allows users to register by creating a new account.

Endpoint
POST /api/register

Request Body

email: User's email address.
password: User's chosen password.
firstName: User's first name.
lastName: User's last name.

Request Example

{
"email": "user@example.com",
"password": "Password123!",
"firstName": "John",
"lastName": "Doe"
}

Response
The API returns JSON responses based on the validation and registration process.

200 OK: Successful registration with the following response:
json
Copy code
{
"status": "success",
"message": "User created successfully",
"data": {
"user": { "user_data_here" }
}
}

400 Bad Request: Invalid email or password format with specific error messages.

409 Conflict: User with the provided email already exists.

500 Internal Server Error: If any unexpected errors occur.

Error Responses
If the request fails validation, the API returns error messages with detailed information about the issues.

For an invalid email:

{
"status": "error",
"message": "Email is invalid",
"data": {
"details": "Explanation of email format rules"
}
}

For an invalid password:

{
"status": "error",
"message": "Password is invalid",
"data": {
"details": "Explanation of password format rules"
}
}

For a conflict (existing user):

{
"status": "error",
"message": "User with this email already exists"
}

Notes
The API uses bcrypt for securely hashing passwords before storing them in the database.
It checks for existing users with the same email before creating a new account.
The API performs validation for email and password format against defined regular expressions.
