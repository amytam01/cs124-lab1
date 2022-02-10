### 1. Design Decisions & Rationale
---

We decided to create a design inspired by a to-do binder. In this binder design, we have multiple folder tabs for users to click through where they can see “Incomplete” tasks, “Complete” tasks, and “All” tasks. The tasks themselves resemble a paper-style to-do list. At the bottom of the user’s list, they’ll see an option to delete all complete items. Finally, the user can add new tasks at the bottom of the screen.

We wanted to limit the number of hidden features on the screen to increase ease of use. This is why the user can initially see all task-filtering tabs, delete and edit options and the add new task option. We decided to place the add task button at the bottom for easy access on a mobile device. In our user testing, the features most frequently interacted with were the checkboxes and add task features. While the checkboxes were the only working feature—explaining their popularity—the add task button was not functional. We used this data to conclude that the add task button should be in the most accessible location. Furthermore, we realized that given too many tasks, the user would be unable to access the add feature button and task-filtering tabs without scrolling. Thus, we made the to-do list tab and the add new to-dos fixed or sticky so that a user could see them at all times. Finally, distinguishing between adjacent list items became difficult with long lists, so we added alternating background colors for visual clarity.
<br>

<br><br>
![Design1](/design/design1.jpg)
<br><br>

---

### 2. Alternative Designs
We had many ideas for our design. We started out with a simple to-do list app, with all the basic functionalities mentioned in the assignment. We had an add button in the top right and buttons with text like delete complete and show incomplete. We later shifted the button to the bottom right corner for easier tap access on a mobile phone for users. We also considered having only one edit button for users to edit multiple tasks. However, we thought that might be confusing in terms of usage so we removed it.

<br><br>
![Design1](/design/design1.jpg)
<br><br>
<br><br>
![Design2](/design/design2.jpg)
<br><br>
<br><br>
![Design3](/design/design3.jpg)
<br><br>
<br><br>
![Design4](/design/design4.jpg)
<br><br>

<br><br>
### 3. User Testing
We conducted user testing with a few of our friends and received extremely valuable feedback. We were able to catch a ton of small details that were confusing and improved the user experience. For one, one of our friends indicated that seeing the incomplete tasks was most important to him and that seeing all tasks was less important to him, especially if some of them were already completed. We incorporated this into our design by changing the order of the task-filtering tabs from [“All”, “Incomplete”, “Complete”] to [“Incomplete”, “Complete”, “All”]. We also increased the space between the edit and delete buttons to reduce the chance of misclicking at the suggestion of our test users. We observed the order in which our users visited each feature of the app, and noted that the user first looked at the task-filtering tabs, then the tasks themselves (focusing on the checkboxes and edit/delete buttons), before finally settling on the add new task button.


<br><br>
### 4. Challenges you Faced
We faced many challenges. We had to navigate many challenges trying to get our top and footer to be sticky (or fixed), and we worked extensively on getting the correct spacing and appropriate font sizes. Getting the tabs to look like tabs was quite difficult as well because it required us to figure out how to maintain a single background with tabs on top. Furthermore, making sure that our entire list showed despite having sticky (or fixed) header and footers required testing our app to the limits with extremely long to-dos and ultimately required a lot of trial and error fixes. We also had to change our element types and styles to adjust for certain looks we were going for and conducting trial and error a ton.

<br><br>
### 4. Parts of the design you're most proud of
The part of the design we’re the proudest of is getting this to-do application to look like a folder. A lot of varying elements went into this, from rounding the edges of the buttons, to editing borders of specific sides to make the look of folder tabs consistent.
