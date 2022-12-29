# Social-Network-API

## Description
In this project I am building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. addationallu I will be using Express.js for routing, a MongoDB database, and the Mongoose ODM. I will be also using the native JavaScript `Date` object to format timestamps.

Because this application won’t be deployed, I will be using a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. 

----

## Installation
  ```
    Node.js
    MongoDB
    Express
    moment
    mongoose
  ```

---

## Usage

Once all the packages have been onstalled, run the following commend in the termianl:

```
npm start 
```
- Mongoose models are syched to MongoDB database
- Connect to MongoDB URL via mongodb://localhost:27017
- Create seed data and test API routes using Insomnia
----

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./image/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./image/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./image/18-nosql-homework-demo-03.gif)

In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./image/18-nosql-homework-demo-04.gif)

In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.