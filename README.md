# To Do Challenge

One of the weekend challenges was to create a single page to do list using Angular, to keep track of a jobs to be done. As this is a basic exercise in using Angular there has been no CSS been used on the web page.

Please find the website on Heroku [here](https://ancient-escarpment-2552.herokuapp.com)

#### Skills Used

- I used the basic skills of test driving to use karma and protractor to TDD the development of the app.

#### Skills Gained/ Improved

- I set up my first node server during this project, this took a while to get used to as it wasn't using ruby in any way. 
- Trying to deploy to Heroku was more troublesome than with rails or sinatra, being the first time deploying something with a node server and using a javascript framework with bower and node. The bower components location needed to be specified and some lines of code needed to be added to actually create the bower components seen as they are in the gitignore as per common customs.  

#### Technologies Used

- Development: Javascript, Node, Bower, HTML
- Testing: Karma, Protractor

#### How To Use

- First clone the repository.
- After assuming you have node installed you need to install node packages using "npm install".
- Then install the bower components with the "bower install" command.
- Then the app can be run locally using the command "node server" and is located at localhost:3000.
- The code can be deployed to a service such as Heroku without any extra steps.

#### Core User Stories

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my to do list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

#### Additional User Stories

```
As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

#### Uncompleted User Stories

Code for this user story is contained (uncompleted) in the aside file.

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks
```




This is a front end manager for tasks and jobs to be done using angular.

* The server is currently built with node and goes to localhost:3000
* Currently you can add/delete and mark tasks as completed
* You can also delete all tasks marked as completed in one go
* It also displays the number of tasks on screen

NB I started introducing the filters for all/completed/umcompleted tasks but ran out of time so code has been moved to the aside file. (It would have taken a big rearrangement of previous code to implement so it is to be implemented at a later date)

After cloning this repo you will need to run npm install and bower install to get all the required packages.

As you may imagine, implementing a To-do list is very much a solved problem. However, we are mainly interested in seeing how you approach testing and design. We are looking for:

* well written, well structured acceptance and unit tests
* clear and expressive JavaScript
* good HTML5 markup

Don't worry about deployment, and make sure you read the CONTRIBUTING.md when submitting a pull request.

## Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

