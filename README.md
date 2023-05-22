# edu_tasks
## This a simple Node.js web application which is providing a RESTful services for geting posts and comments
## It is a prework assignment for Back-end Engineer (Node.js) volunteers
### It is hosted on vercel and also available locally
## The npm packages used include 
- dotenv : for storing environment variables
- express: Node.js web application framework,
- helmet: for securing our web application,
- http-status-codes: for getting HTTP status codes,
- mongoose: mongodb database library,
- morgan: logger, for logging requests routes on the console.
- nodemon: for restarting the server during this development stage

### Vercel deployment URL; 
[https://faruq-edu-tasks.vercel.app/api/](https://faruq-edu-tasks.vercel.app/api/)

## Posts Routes
- get posts : method ==> GET :  
-[https://faruq-edu-tasks.vercel.app/api/posts](https://faruq-edu-tasks.vercel.app/api/posts)
-[http://localhost:5000/api/posts](http://localhost:5000/api/posts) <br>
if a limit is specified as a query string with a valid integer, it will return the number of posts specified in the query string else it will return all the posts or all the posts if the limit is greater than the available number of posts

### Examples: 
This will return 10 posts
<br>
-https://faruq-edu-tasks.vercel.app/api/posts?limit=10
- http://localhost:5000/api/posts?limit=10
<br />
<br />
This will return all the posts. "0" as limit will return all the comments too 
<br />

-https://faruq-edu-tasks.vercel.app/api/posts?limit=fgkks
- http://localhost:5000/api/posts?limit=fgkks

<br />
<br />
This will return all the <br />
-https://faruq-edu-tasks.vercel.app/api/posts?limit=fgkks
- http://localhost:5000/api/posts?limit


## Comments Routes
- get comments : method ==> GET :  [http://localhost:5000/api/comments](http://localhost:5000/api/comments)
if a limit is specified as a query string with a valid integer, it will return the number of comments specified in the query string else it will return all the comments or all the comments if the limit is greater than the available number of comments

### Examples: 
This will return 10 comments
<br>
-https://faruq-edu-tasks.vercel.app/api/comments?limit=10
- http://localhost:5000/api/comments?limit=10
<br />
<br />
This will return all the comments. "0" as limit will return all the comments too 
<br />

-https://faruq-edu-tasks.vercel.app/api/comments?limit=fgkks
- http://localhost:5000/api/comments?limit=fgkks

<br />
<br />
This will return all the <br />
-https://faruq-edu-tasks.vercel.app/api/comments?limit=fgkks
- http://localhost:5000/api/comments?limit
