# React + Vite
This project is created with Vite with react. React provides a good template for creating Single page applications, which is the reason I have chosen this. 

To run the application on your machine you need to do the following command in a terminal: 

# npm run dev
Afterwords a popup shouls show with a link to a local host. This Link will lead you to the application. 


you can also go to website: https://8rageramberg.github.io/myfilmratings/ 
Currently trying my best to link it to the Custom Domain Name myfilmratings.store but I am currently meeting some troubles.



# Changes made from proposal to prototype: 
There is quite a few changes to the prototype, both a bit for functionality.

As SPA is one of the criterion I landed on refactoring my code into react. This took a lot of effort but it was nice for structuring the application. This new way where you manages states and the divs are replaced is great for changing out parts of the webpage without having separate html files.

# The Footer
The footer is a big part of the functionality for the new application. The footer is always placed at the bottom securing an easy reach on mobile phones at all times. The buttons are enlargened and I have also taken in the tips from my grader about "happy paths" putting add to the right and back and delete on the left side"

## The search bar

The search bar have taken the place of the sort functions. As I am quite new to react a sorting buttons where you can select what to sort on was hard to implement and i had to go away because of time limits. The search button however is working on almost all the thought out sorting steps. As a feature for the feature I would make sort functionality whitch lets you sort on acending or decending priority and ratings for example.

# Settings
Settings is where the user should be able to custemize, and make a more personalized experience. In the early fazes of developing I had information about commands, and a film reset button. This did not transelate well into react at the time and got prioritesed down. For future however this is also a place I would like to add features, such as dark mode, colour schemes, A functional delete all local storage data options and other fun settings for users to take advantage of. This also got prioritised a bit down as I focused a lot on the usecase for mobile phones and smaller screens, as they rely on touch the commands are not applicable in the same way either. 

# Add Site 
The addsite is optimised for cellphone use, and have now larger buttons. 

# Cards

The cards are new and imporved to fit nicely to both desctop and mobile display. They are centered nicly on the page and are flexible to different screen sizes at all times. They have now a left side and a right side whitch is a lot different than the initial proposal cards. This however is more visually pleasing and is also promoting the selecting system I improved on.

# Selecting system
The selecting system was initially smaller checkboxes, however now the whole card is the checkbox. The selecting system markes cards and allows user to delete or edit depending on number of selected cards. This system is simple for both users on desctop and on mobile as the cards acts as big buttons. 

# Edit system
The edit system is created so a user can update a card. When a card is selected users are allowed to edit the card, utilizing an edit handler where the addsite now have prefilled inputs depending on what the original card the user wanted to edit. 



# use of generative Ai

I used Chat GPT (free version: 3. june 2024) for a lot of different tasks for this assignment. The AI is great for explaining code and provide suggestions to strategies when coding. In a lot of cases since I am new to react I asked for how different sections would work together and a lot on how use states and use effects work. 

For a lot of functionality however it was difficult to get the AI to understand the parent child relation, and in some cases just sent me in the wrong directions. 

Here are what prompts appliccable to show: 



# Prompts and replies
Reason: I had already created the form in javascript but i needed to refactor it to react
prompt: Prompt:  “fix my form to fit my data model”

 <!-- Input fields --> <form id="addFolderForm"> <input type="text" placeholder="Name" required> <input type="text" placeholder="Director" required> <input type="text" placeholder="Year" required> <button type="radio">Film/TV</button> <input type="text" placeholder="Genera" required> <input type="number" placeholder="Length" required> <input type="text" placeholder="Seen" required> <input type="number" placeholder="Rating" required> <input type="number" placeholder="Numer Priority" required> <input type="text" placeholder="img url" required> <input type="int" placeholder="Favourite" required> <button type="submit">Add</button> fix my form to fit the data model: str: Title str: Di- rector int: (num input) Year boolean (radio button): Content list[str] (drop- down): Genre int, int (num input) (hours, min- utes): Duration boolean (radio button): Watched float (0- 10) (num input) / None: Rating float (0- 10) (num input): Priority boolean (press icon): favourite Batman Begins Christopher Nolan 2005 Film Fantasy / Action 2h 20min Yes 9 stars 1 Yes The Big Bang The- ory Mark Cendrowski 2007 TV-Series Comedy 20min No None 10 (top priority) Yes Looking at the data model we want to keep track of a lot of data. We need all these data for simple lookup, allowing the users to see all the features of a movie that is important. For future scalability I also envision users can select columns themselves, such as adding notes on the film, rating for music or favourite actor in the film

Reply: \


![alt text](gpt/gpt1.png)

