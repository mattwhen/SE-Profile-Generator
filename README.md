# **Team Profile generator**

## **Description**
This project allows a user to seamlessly create their own Team Profiles by answering a series of user prompts to add a Manager, along with their contact information, and add an Engineer/Intern to their team along with their contact information as well. Once all the user prompts are completed, a new file (TeamProfile.html) will be generated in the root directory. **WARNING:** If there is already a previously generated TeamProfile.html file, it will override the existing data on that webpage.

## **Installation**
The following should be installed onto the user's machine first, for this project to work correctly. 

* VS Code (or similar IDE)
* Node.js

Once you have the above applications installed, you can clone the repo  to your local machine from my GitHub: https://github.com/mattwhen/SE-Profile-Generator

Open the application in your IDE and using the integrated terminal, use the following command in your terminal: 

* npm install

This will download the modules to run this application. 
 <br><br>

## **How to use** 
Open the project in your IDE, and open terminal in the root folder (SE-Profile-Generator) inside your IDE, or you can open a seprate terminal application and change directories into the root folder. Although in my opinion, using the integrated terminal in the IDE is much more convenient. 

Once you're in the correct folder/directory run the following command in the terminal: 
* npm start



## **Challenges**
One of the challenges I came across was how to structure the prompts accordingly. I initially had one huge function that would prompt for the manager's contact information, on top of having the code for adding additional members to the team using a loop type for the prompts. I received guidance from my tutor (Brandon Leek) and suggested I separate the functions for the Manager, Engineer, & Intern separately for better readability and easier debugging as having all the prompts in one function made debugging more difficult. 


## <b>Future features</b>
Some future features I would add is to add styling to the webpage although I didn't get a chance to do that in a timely manner but would love to come back to this and finish what I started. I didn't get the chance either to utilize test driven development (TTD) to check that the user input is in the correct format, would also like to come back to tackle this as well. 

Another feature is adding some conditional logic to the user prompts in case they input something that seems to be invalid, for example when it prompts for the team members id, we expect an integer and continue with the user prompts. If the user inputs another data type for example a string data type, we should log to the user that the input is invalid and try again. 


## <b>References</b>
Tutor: **Brandon Leek**
<br>

## <b>Live demo<b>
Screen recording demo: 
[demo](./TeamProfile_demo.gif)
<br>

## <b>Repository:
https://mattwhen.github.io/SE-Profile-Generator/ 

## <b>Deployed application via Heroku:
https://profile-generator.herokuapp.com/ 
