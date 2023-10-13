Task 1
(1) Prerequisites

Read a little about the json-server library to get a general idea of the main package you’ll have to use for this task.

Install Postman and try to understand how to work with it.

(2) Setting up the project

Initialize a new node app

Install the json-server NPM package

Create a folder /db and add a data.json file to it with the following content:

{
"tasks": [
{
"id": 1,
"title": "Buy milk",
"description": "I need it, my cat needs it.",
"done": false
},
{
"id": 2,
"title": "Clean the house",
"description": "Vacuum the floors and clean the bedroom",
"done": true
},
{
"id": 3,
"title": "Do laundry",
"description": "Wash and fold the clothes",
"done": false
}
]
}
This will be used by json-server as the data source for the API of your application.

Create a folder /src and:

Add a file api.js

This will store the logic to connect to the API served by json-server

Add the following to the beginning of the file: const URL ='http://localhost:3001/tasks';

Add an index.js file

This is the main script file, export all the functions you need to use in the front-end (HTML) here.

Add the following to the "scripts" section of your package.json:

{
"server": "json-server --port 3001 --watch db/data.json"
}
server will start a server that exposes a REST API with the tasks data at http://localhost:3001/tasks. You can use any HTTP client, such as curl or Postman, to interact with the API.

Create an index.html to be the front-end.

Add the basic HTML structure

Import the index.js file with <script src="src/index.js"></script> inside the <head> tag, to have access to the Javascript code.

(3) Implementation

Your task is to create an application for managing… well, tasks. :slight_smile:

Use your creativity to accomplish this, but try to meet at least the following goals:

Inside /src/api.js define functions to help you with the API operations, such as getAll(), create(task), getById(id), update(task), remove(id)

Use fetch to interact with the API

Make sure to use the proper HTTP verbs

Keep in mind that json-server will provide a RESTful API, so you should be able to access the data in a standard way

Create a <template> element in your HTML page to hold the template for a task and use this to render the existing tasks.

Use variables in your CSS, so that you can easily change the color scheme, fonts, etc.

Suggestion: Define a TasksManager.js file in /src which contains a class that can manage all the interactions and display of tasks on the page. This would keep your code neatly organized.
For example, you could use the constructor to find the template in the HTML, and save it to a class property. You could then define a method render to display the list using it, and so on, keeping everything contained inside the class.
You are also free to take a different approach if you prefer.

The hard requirement is that the user must be able to:

Add new tasks

Remove existing tasks

Mark tasks as done or not done

Edit an existing task

Think about an approach for this one - you can try editing inline in the list of tasks, having a simple modal appear on top of the list, etc. As almost always, there are many ways to achieve this.

After each task operation, that data must be saved in the API

Search online for inspiration for the look and feel of your app, but try to add as much personal touch to the UI as you can. :slight_smile:
