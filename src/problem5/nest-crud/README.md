<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Simple CRUD API with NestJS</h1>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

This is a simple CRUD API built with NestJS. Built for interview purposes.

## Technologies

This project uses the following technologies:

- TypeScript
- [NestJS](https://nestjs.com/) for main framework 
- [Express](https://expressjs.com/) for web server
- [TypeORM](https://typeorm.io/) for ORM
- [MySQL](https://www.mysql.com/) for database
- [OpenAPI](https://swagger.io/specification/) for API documentation
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) for containerization

## Features

I have implemented the crud operations for users. The following features are available:

- Business logic with services
  - Find users with conditions, pagination
  - Create a user
  - Get all users
  - Get a user by id
  - Update a user
  - Delete a user
- API documentation with Swagger/OpenAPI
- Dockerized application
- Validation
- Global exception filter
- Global response structure

This is a basic implementation of a CRUD API with NestJS. I think my code is clean and easy to understand, and the project structure is well-organized.

## Project setup and run

### Database

You need to have MySQL database running on your machine. You can install MySQL locally or use Docker to run it.

For this project, i have already implemented the `docker-compose.yml` file in `docker` directory to run the MySQL database. You can run the following command to start the MySQL database:

> Make sure you have Docker installed on your machine.

```bash
npm run docker:mysql
# or
docker-compose -f docker/docker-compose.yml up -d mysql
```

After that, you can connect to the MySQL database with the following credentials: `root:123456` and the database name is `99tech`.

I have already included the database schema in the `docker/mysql/sql/user.sql` file. This file will be executed when the MySQL container is started with docker-compose.

### API Server

Run the following commands to start the API:

```bash
# 1. Install dependencies
npm install

# 2. Create .env file, you can copy from .env.dev
cp .env.dev .env

# 3. Run the API
npm run start
# or
npm run start:dev
```

After running, you can access the API documentation at `http://localhost:3000/docs`.

## Deployment

For now, i only provide docker deployment. You can build the docker image and run it with the following commands:

```bash
docker-compose -f docker/docker-compose.yml up -d app
# or
npm run docker:app
```

I write a simple `Dockerfile` to build the image, and use `docker-compose` to run the app container with build context. You can check the `docker-compose.yml` file in the `docker` directory.

After running the app, you can access the API documentation at `http://localhost:3000/docs`.

