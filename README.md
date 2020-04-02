### Description ###

-   an example project utilising the post-redirect-get loop when submitting form data
-   minimilasit front end  layout allowing the user to input details pertaining to a product they wont to sell
-   on form submission a post request is sent to an     express sever 
-   the post request is redirected to a get request and a listing is generate using a pug template and sent to the users browser
- a button (implemented with in a form on the listing page) alows the user to return to a hompage filled in details implemened using a get request to `/filledForm` on submission

### Getting started ###

-   clone/fork project to you local directory
-   install dependicies by runing the following in console: 

``` javascript 
    npm i 
```
-   to start the the server navigate to the directory `listing-service` and run the following in console

``` javascript 
    npm start
``` 
-   The server is now running and ready to recieve requests at localhost. By default the `port=4001`. This can be changed to any desired port

``` javascript
const PORT = process.env.PORT || port`
```

### current issues ###

-   acertain if user is submitting an image that is identical to one in the `uploads` folder and prevent saving of that same image

