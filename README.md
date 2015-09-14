Todo Challenge
------
This is a front end manager for tasks and jobs to be done using angular.

* The server is currently built with node and goes to localhost:3000
* Currently you can add/delete and mark tasks as completed
* You can also delete all tasks marked as completed in one go
* It also displays the number of tasks on screen

NB I started introducing the filters for all/completed/umcompleted tasks but ran out of time so code has been moved to the aside file. (It would have taken a big rearrangement of previous code to implement so it is to be implemented at a later date)

After cloning this repo you will need to run npm install and bower install to get all the required packages.

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

As you may imagine, implementing a To-do list is very much a solved problem. However, we are mainly interested in seeing how you approach testing and design. We are looking for:

* well written, well structured acceptance and unit tests
* clear and expressive JavaScript
* good HTML5 markup

Don't worry about deployment, and make sure you read the CONTRIBUTING.md when submitting a pull request.

## Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

