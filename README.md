# edu_tasks
## This a simple Node.js web application which is providing a RESTful services for geting posts and comments
## It is a prework assignment for Back-end Engineer (Node.js) volunteers
#
## The npm packages used include 
- dotenv : for storing environment variables
- express: Node.js web application framework,
- helmet: for securing our web application,
- http-status-codes: for getting HTTP status codes,
- mongoose: mongodb database library,
- morgan: logger, for logging requests routes on the console.
- nodemon: for restarting the server during this development stage

## Posts Routes
- get posts : method ==> GET :  [http://localhost:5000/api/posts](http://localhost:5000/api/posts)
if a limit is specified as a query string with a valid integer, it will return the number of posts specified in the query string else it will return all the posts or all the posts if the limit is greater than the available number of posts

### Examples: 
- http://localhost:5000/api/posts?limit=10 
This will return 10 posts

- http://localhost:5000/api/posts?limit=fgkks
This will return all the posts. "0" as limit will return all the comments too

- http://localhost:5000/api/posts?limit
This will return all the posts


## Comments Routes
- get comments : method ==> GET :  [http://localhost:5000/api/comments](http://localhost:5000/api/comments)
if a limit is specified as a query string with a valid integer, it will return the number of comments specified in the query string else it will return all the comments or all the comments if the limit is greater than the available number of comments

### Examples: 
- http://localhost:5000/api/comments?limit=10 
This will return 10 comments

- http://localhost:5000/api/comments?limit=9fgs
This will return all the comments. "0" as limit will return all the comments too

- http://localhost:5000/api/comments?limit
This will return all the comments

## I created two routes to create the comments and posts during the codes writing but deleted after getting sufficient comments and posts. I used a for of loop to create the comments and posts

