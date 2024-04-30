# dotnet_react

Uses the Model-View-Controller (MVP) design pattern. Each heading and subheading relates to a project and folder, respectively.

## API

Contains the 'main' functionality of our code.

### Controllers

Controllers are spawned instances that handle HTTP requests.

### Extensions

Extending classes allows us to add additional functionality to premade classes.

## Application

Contains definitions for functional parts of the web application.

### Core

MappingProfiles allow us to assign each defined field within our HTTP request body to an instance in memory that will eventually be pushed to the database.

### Videos

All the functionality for creating, deleting, listing, getting details, and editing videos can be found here.

## Client-App

Contains the frontend application (React, Typescript).

## Domain

Contains the objects and schemas that define the database.

## Persistence

Contains the test data, database migrations, and data context.


