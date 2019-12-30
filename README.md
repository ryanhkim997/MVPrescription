# MVPrescription

> This repo is a prescription manager built with React-Native, Express server, MongoDB, and Firebase to store users.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### Server API

- /server/test : test channel
- /mvp/users/all : Supports GET requests only. Get all users' info (only name is provided so far)
- /mvp/user : Supports GET, POST, DELETE request. Only one item will be returned for GET request. Username is required in params for GET & DELETE request. CAUTION: DELETE request will also remove all drug records related to the user
- /mvp/drugs : Supports GET & DELETE request. Getting or deletting all drug records related to a specified user. The username must be provided in params.
- /mvp/drug : Supports all CRUD requests. The drug name must be provided in params for GET, UPDATE and DELETE request. You can only post one item for each POST request

### Firebase API

- https://us-central1-mvprescription.cloudfunctions.net/api/users/all : Supports GET requests for user info (first/last name, email, username, and password).
- https://us-central1-mvprescription.cloudfunctions.net/api/users : Supports GET and POST requests. For GET request, username must be provided in query. For POST request (creating new user), first/last name, email, username, and password must be provided.

## Requirements

- Node 6.13.0
- MongoDB
- Firebase-CLI

## Development

### Installing Dependencies and Start Server

From within the root directory:

```sh
npm install
npm start
```

For linux users:

```sh
sudo service mongod start
```
To implement Firebase functionality:
- Obtain GCP API Key and place file within /functions folder
- From within the /functions folder:
  - npm install
  - npm start
  - npm run deploy
