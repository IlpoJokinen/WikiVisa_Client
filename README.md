# WikiVisa, a quiz game that uses data from MediaWiki API 

## Contributors:
* Jaakko Uusitalo
* Jan Lindlöf
* Mikael Kontila
* Ilpo Jokinen
* Paavo Poutiainen
* Aarre Suvanto

# Idea 

The team was formed as a part of o school course in Helsinki. Our task was to create some program that uses some form of API and free source code found from the internet.

We chose to use MediaWiki as an API to fetch data to our software. The idea was to create a socket base web application where players were to answer some questions like any other trivia quiz. Our plan was to use MediaWiki to auto generate the questions and answer options.

We have used node's express library and wikijs module in the server side and socket<i></i>.io to generate rooms to our domain.
The UI side generated with JS and React.

# Project boundary conditions

The project was timed to the spring semmester of 2020 and it is divided to four agile sprints. The assigment itself was quite vacant and gave us a lot of imagination to use. The plan was to develop a demo each month in the given Scrum boundaries to show to our teachers.

# The development periods
## Sprint 1
In the first sprint our main goal was to demo a simple playthrough from the perspective of the player. First the player should be able to give a code that allows him/her to acces the gaming lounge so to speak. After that the players in the room were to jump into the game itself with one question at this point. 

The intention was that we could generate one question and its answer options to each player who were in the room playing so that everyone could see their own answers and the answers of their buddies. We quickly designed simple frames to how our little quiz game should look like with all the different screens. In this point we kinda knew what different components to build to our front-end.
#### Initialization
We started with creating two remote repositories to GitHub. One to the server side and the another to the front-end. First we did the necessary installments to the server repository including socket and express libraries. After that we created one json file to store some test data to us to work with.

In the client side we generated the components we had desided to make and stored them into components folder. In the `App.js` we used `react router` to navigating through screens. As the design is considered we have used `react-bootstrap` to create our elements.

#### MediaWiki API
We installed the wikijs module and imported it to the `index.js` file of the server repository. This allowed us to make fetches from the whole Wikipedia to our server. With the usage of **promises** we were able to retrieve the data to objects in the code.

## Sprint 2
# Tech
#### React [Creating new react-app](https://reactjs.org/docs/create-a-new-react-app.html)
#### Node Express [Install](https://expressjs.com/en/starter/installing.html)
#### Socket<i></i>.io [Get started](https://socket.io/get-started/chat/)
#### WikiJs [Get started](https://wiki.js.org/get-started)
