### Todolist-API Docs

- `login /login	`

  REST API to login

  > Login User

  _Path Example_

  ```
  POST https://fluffy-hen-slip.cyclic.app/login
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "token": ""eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJzYW1hbjY3IiwiZW1haWwiOiJzYW1hbjY3QGdtYWlsLmNvbSIsImlhdCI6MTY5OTg5MzA1N30.9Bm5lVlVyIsHq_8-9r3EYcSpOBz-cXRpFjocFmJTUEU""
  }
  ```

  _Response (400)_

  ```json
  {
    "status": "error",
    "message": "Invalid Request"
  }
  ```

  _Response (404)_

  ```json
  {
    "status": "error",
    "message": "User Not Found"
  }
  ```

  _Response (404)_

  ```json
  {
    "status": "error",
    "message": "Password Not Match"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "message": "Internal Server Error"
  }
  ```

---

- `register /register	`

  REST API to register

  > Register User

  _Path Example_

  ```
  POST https://fluffy-hen-slip.cyclic.app/register
  ```

  _Response (201)_

  ```json
  {
    "message": "Create New User Successfully",
    "newUser": {
      "id": 3,
      "username": "saman46",
      "email": "saman34@gmail.com",
      "password": "$2b$10$FyqXxEj.PBx9zrdBUxtlkujBa24AljiFH54aPSlRU93VxiOp4eyge",
      "updatedAt": "2023-11-13T15:26:42.857Z",
      "createdAt": "2023-11-13T15:26:42.857Z"
    }
  }
  ```

  _Response (400)_

  ```json
  {
    "status": "error",
    "message": "Invalid Request"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "message": "Internal Server Error"
  }
  ```

---

- `POST /todos	`

  REST API to create new todo

  > Create Todo List

  _Path Example_

  ```
  POST https://fluffy-hen-slip.cyclic.app/todos
  ```

  _Response (201)_

  ```json
  {
    "status": "success",
    "message": "Created Todo Successfully"
  }
  ```

  _Response (400)_

  ```json
  {
    "status": "error",
    "message": "Invalid Request"
  }
  ```

  _Response (401)_

  ```json
  {
    "status": "error",
    "message": "unauthorized"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "message": "Internal Server Error"
  }
  ```

---

- `GET /todos	`

  REST API to show list of todo

  > Get All Todo

  _Path Example_

  ```
  GET https://fluffy-hen-slip.cyclic.app/todos/
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "data": [
      {
        "id": 6,
        "title": "tes 1",
        "status": false
      }
    ]
  }
  ```

  _Response (401)_

  ```json
  {
    "status": "error",
    "message": "unauthorized"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "message": "Internal Server Error"
  }
  ```

- `GET /todos/:id	`

  REST API to show detail of todo

  > Show Detail Todo

  _Path Example_

  ```
  GET https://fluffy-hen-slip.cyclic.app/todos/2
  ```

  _Response (200)_

  ```json
  {
    "status": "success",
    "data": {
      "id": 2,
      "title": "testn",
      "status": false,
      "description": "tes deskripsi",
      "userId": 3,
      "createdAt": "2023-11-13T15:35:21.000Z",
      "updatedAt": "2023-11-13T15:35:21.000Z"
    }
  }
  ```

  _Response (404)_

  ```json
  {
    "status": "error",
    "message": "Todo Not Found"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "message": "Internal Server Error"
  }
  ```

---

- `PUT /todos/:id`

  REST API to updated todo

  > Update Todo

  _Path Example_

  ```
  PUT https://fluffy-hen-slip.cyclic.app/todos/2
  ```

  _Request Body_

  ```json
  {
    "title": "apa aja",
    "status": true,
    "description": "bebas deskripsinya"
  }
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Todo Data Updated Successfully"
  }
  ```

  _Response (400)_

  ```json
  {
    "status": "error",
    "message": "Invalid Request"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "message": "Internal Server Error"
  }
  ```

  ***

- `DELETE /todos`

  REST API to delete all todo

  > Delete All Todo

  _Path Example_

  ```
  DELETE https://fluffy-hen-slip.cyclic.app/todos
  ```

  _Response (200)_

  ```json
  {
    "status": "success",

    "message": "All Related User Todo Data Successfully Deleted"
  }
  ```

  _Response (401)_

  ```json
  {
    "status": "error",
    "message": "unauthorized"
  }
  ```

  _Response (500 - Internal Server Error)_

  ***

- `DELETE /delete/:id`

  REST API to delete specific todo

  > Delete Specific Todo

  _Path Example_

  ```
  DELETE http://localhost:8080/api/v1/todo/32
  ```

  _Response (200)_

  ```json
  {
    "status": "success",

    "message": "All Related User Todo Data Successfully Deleted"
  }
  ```

  _Response (400)_

  ```json
  {
    "status": "error",
    "message": "Invalid Request"
  }
  ```

  _Response (404)_

  ```json
  {
    "status": "error",
    "message": "Todo Not Found"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": "error",
    "message": "Internal Server Error"
  }
  ```

  ***
