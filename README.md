# <img src="./web/src/assets/images/icons/shield.png" width="30" height="30"> SQL Injection Sample
> Lucas Rennó Kallás

:sunny: This is a simple SQL Injection Sample and you can bypass the login page of this site. 

I used Knex with SQLITE3 database.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1280px-SQLite370.svg.png" width="400" height="200">

This repository represents a sample of database fault due to the everyone can abuse the problem of a select in the database and use SQL Injection to connect to an account. This project was made to Database II subject, to test a security failure.

## :floppy_disk: Requirements

<img src="https://www.trytape.com/wp-content/uploads/2019/10/yarn_image.png" width="300" height="150">

:arrow_forward: I used Yarn to install packages: 
- **YARN**.

### :arrow_down_small: Downloads:
Some dependencies to download (with Yarn).

**:mega: Web:**
> yarn add react-router-dom @types/react-router-dom
> yarn add react @types/react
> yarn add react-dom @types/react-dom
> yarn add axios @types/axios

**:mega: Server:**
> yarn add node @types/node
> yarn add ts-node-dev -D
> yarn add knex sqlite3
> yarn add typescript -D
> yarn add cors @types/cors express @types/express

### :boom: Starting it

**:star: WEB:**

Go to the 'web' folder and put:
> yarn start

**:star: SERVER:**

Go to the 'server' folder and put:
> yarn start

## :abcd: How it works

First start the **server** and after that start the **web** in different terminals/command prompts, after that acess 'localhost:3000' in your browser.

The login page will appear like this:

![login page](/readme_imgs/loginPage.PNG)

So, find a way to access the next page.

When you have found a way to pass the form, the following message will appear:

![success page](/readme_imgs/successPage.PNG)

Be aware that you can't access the next page just typing it at the page URL, like: 'localhost:3000/admin', if you do this, the following message will appear:

![error page](/readme_imgs/errorPage.PNG)

The API host is 'localhost:3333', note that the post method is disabled and the only method available is get. This method receives a query with the username and the password. </br>You can test some combinations by sending to 'http://localhost:3333/?username=yourUsername&password=yourPass' and the API will return a JSON. Example of the reponse are below.

**:snowman: FAILURE:**
> {
>   "success": 0
> }

**:zap: SUCCESS:**
> {
>   "success": 1
> }

## :unlock: Where is the problem?
Specifically, the problem is in LoginController class at 'server/src/controllers/LoginController.ts'. Get method starts the 'index' function in that class, and this function is just reading the query and putting the data from it at a string that will select something at 'login' table with the username and password which are on the input. If you want to eliminate SQL Injection attacks from the site, just change this file LoginController.ts at these rows:

![changes](/readme_imgs/changeIt.PNG)

## :v: Want to test?

- Make a fork

**Good hacking :wink:**