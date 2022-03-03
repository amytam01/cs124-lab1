### 1. Design Decisions & Rationale
---

We decided to create a design inspired by a to-do binder. In this binder design, we have multiple folder tabs for users to click through where they can see “Incomplete” tasks, “Complete” tasks, and “All” tasks. The tasks themselves resemble a paper-style to-do list. At the bottom of the user’s list, they’ll see an option to delete all complete items. Finally, the user can add new tasks at the bottom of the screen.

We wanted to limit the number of hidden features on the screen to increase ease of use. This is why the user can initially see all task-filtering tabs, delete and edit options and the add new task option. We decided to place the add task button at the bottom for easy access on a mobile device. In our user testing, the features most frequently interacted with were the checkboxes and add task features. While the checkboxes were the only working feature—explaining their popularity—the add task button was not functional. We used this data to conclude that the add task button should be in the most accessible location. Furthermore, we realized that given too many tasks, the user would be unable to access the add feature button and task-filtering tabs without scrolling. Thus, we made the to-do list tab and the add new to-dos fixed or sticky so that a user could see them at all times. Finally, distinguishing between adjacent list items became difficult with long lists, so we added alternating background colors for visual clarity.
First Lab:

We decided to create a design inspired by a to-do binder. In this binder design, we have multiple folder tabs for users to click through where they can see “Incomplete” tasks, “Complete” tasks, and “All” tasks. The tasks themselves resemble a paper-style to-do list. At the bottom of the user’s list, they’ll see an option to delete all complete items. Finally, the user can add new tasks at the bottom of the screen.

We wanted to limit the number of hidden features on the screen to increase ease of use. This is why the user can initially see all task-filtering tabs, delete and edit options and the add new task option. We decided to place the add task button at the bottom for easy access on a mobile device. In our user testing, the features most frequently interacted with were the checkboxes and add task features. While the checkboxes were the only working feature—explaining their popularity—the add task button was not functional. We used this data to conclude that the add task button should be in the most accessible location. Furthermore, we realized that given too many tasks, the user would be unable to access the add feature button and task-filtering tabs without scrolling. Thus, we made the to-do list tab and the add new to-dos fixed or sticky so that a user could see them at all times. Finally, distinguishing between adjacent list items became difficult with long lists, so we added alternating background colors for visual clarity.

Second Lab:

For the second lab, we kept the fundamental ideas the same from our first lab. Most of the work we did was refining in actions and animations since we were now using JavaScript now for implementation. A few things we added: a module that pops up when you delete a task, moving completed tasks to the bottom (of the all tasks tab), and removing completed tasks from the incomplete tasks tab. Aesthetically, we changed the color scheme of the buttons to the folders and added a white background box to each of the tasks to make them more distinctive from one another. We also have a default message for when there are no tasks ("Start by adding a new task?"). As we were creating these features, we also thought through the experience of cancelling and creating tasks. We made it so that when you click the input part of "New Task" it empties automatically when you're typing in a new task (previously you'd have to first delete the "New Task" text to write your own text). However, if you just click add without writing your own text description, the text will be "New Task" (which we believe to be a good default text). Furthermore, we made the editing process more visually appealing and non-disruptive to the entire experience; it used to be a text box but now it's just an underline to indicate editing. When you click to edit another object, it will stop editing the previous one. Similarly, you can either click cancel or simply click outside the delete module to cancel your action. This pop-up module gives the user a warning and prevents the surprise that comes with accidentally clicking delete (rather than an action like completed/checked). Overall, we've done our best to create asmooth experience such that uers shouldn't be surprised by any actions. The only thing we'd like to implement but haven't been able to is an animation where when a task is completed, the task is crossed out in the incompleted tab then "moved" to the completed tab such that the sudden dissapearance of a task from incomplete tab is not surprisng to the user.
<br>

<br><br>
![Design1](/design1.jpg)
<br><br>
![Design2-1](/design2-1.jpeg)
<br><br>

---

### 2. Alternative Designs
<<<<<<< HEAD
We had many ideas for our design. We started out with a simple to-do list app, with all the basic functionalities mentioned in the assignment. We had an add button in the top right and buttons with text like delete complete and show incomplete. We later shifted the button to the bottom right corner for easier tap access on a mobile phone for users. We also considered having only one edit button for users to edit multiple tasks. However, we thought that might be confusing in terms of usage so we removed it.

First Lab:

We had many ideas for our design. We started out with a simple to-do list app, with all the basic functionalities mentioned in the assignment. We had an add button in the top right and buttons with text like delete complete and show incomplete. We later shifted the button to the bottom right corner for easier tap access on a mobile phone for users. We also considered having only one edit button for users to edit multiple tasks. However, we thought that might be confusing in terms of usage so we removed it.

Second Lab:

We wanted to follow our original vision and thus did not change much. However, based on our user testing we did consider moving the "Delete All Completed Tasks" button to the top. This is something we will consider further in the future as well.

>>>>>>> 244b3a4 (Create design.md)
<br><br>
![Design1](/design1.jpg)
<br><br>
<br><br>
![Design1](/design2.jpg)
<br><br>
<br><br>
![Design1](/design3.jpg)
<br><br>
<br><br>
![Design1](/design4.jpg)
<br><br>

<br><br>
### 3. User Testing
<<<<<<< HEAD
We conducted user testing with a few of our friends and received extremely valuable feedback. We were able to catch a ton of small details that were confusing and improved the user experience. For one, one of our friends indicated that seeing the incomplete tasks was most important to him and that seeing all tasks was less important to him, especially if some of them were already completed. We incorporated this into our design by changing the order of the task-filtering tabs from [“All”, “Incomplete”, “Complete”] to [“Incomplete”, “Complete”, “All”]. We also increased the space between the edit and delete buttons to reduce the chance of misclicking at the suggestion of our test users. We observed the order in which our users visited each feature of the app, and noted that the user first looked at the task-filtering tabs, then the tasks themselves (focusing on the checkboxes and edit/delete buttons), before finally settling on the add new task button.


<br><br>
### 4. Challenges you Faced
We faced many challenges. We had to navigate many challenges trying to get our top and footer to be sticky (or fixed), and we worked extensively on getting the correct spacing and appropriate font sizes. Getting the tabs to look like tabs was quite difficult as well because it required us to figure out how to maintain a single background with tabs on top. Furthermore, making sure that our entire list showed despite having sticky (or fixed) header and footers required testing our app to the limits with extremely long to-dos and ultimately required a lot of trial and error fixes. We also had to change our element types and styles to adjust for certain looks we were going for and conducting trial and error a ton.

<br><br>
### 4. Parts of the design you're most proud of
The part of the design we’re the proudest of is getting this to-do application to look like a folder. A lot of varying elements went into this, from rounding the edges of the buttons, to editing borders of specific sides to make the look of folder tabs consistent.
=======

First Lab:

We conducted user testing with a few of our friends and received extremely valuable feedback. We were able to catch a ton of small details that were confusing and improved the user experience. For one, one of our friends indicated that seeing the incomplete tasks was most important to him and that seeing all tasks was less important to him, especially if some of them were already completed. We incorporated this into our design by changing the order of the task-filtering tabs from [“All”, “Incomplete”, “Complete”] to [“Incomplete”, “Complete”, “All”]. We also increased the space between the edit and delete buttons to reduce the chance of misclicking at the suggestion of our test users. We observed the order in which our users visited each feature of the app, and noted that the user first looked at the task-filtering tabs, then the tasks themselves (focusing on the checkboxes and edit/delete buttons), before finally settling on the add new task button.

Second Lab:

We conducted user testing again, and again had extremely valuable feedback. We caught a lot of small things that were jarring to users that we changed, like the lack of a warning from clicking the delete button, and the surprise when you complete a task in incomplete that it disappears. Furthermore we found that small inconsistencies like different font styles and sizes when editing tasks text, and having a "Delete All Completed Tasks" button in incomplete task made no sense. We implemented all but two of these changes. One was creating an animation to give feedback to users that tasks were being completed. We believe that as long as the tasks are named differently it'll be more obvious to users that they've moved their completed tasks, but we want to create an animation in the future. In addition, one of our users suggested moving the "Delete All Completed Tasks" button to the top and creating an option to move tasks. We hope to potentially implement some of their suggestions in the future, but they agreed that they already really enjoyed the app experience more than the previous application (one of our users was the same from our first lab).


<br><br>
### 4. Challenges you Faced

First Lab:

We faced many challenges. We had to navigate many challenges trying to get our top and footer to be sticky (or fixed), and we worked extensively on getting the correct spacing and appropriate font sizes. Getting the tabs to look like tabs was quite difficult as well because it required us to figure out how to maintain a single background with tabs on top. Furthermore, making sure that our entire list showed despite having sticky (or fixed) header and footers required testing our app to the limits with extremely long to-dos and ultimately required a lot of trial and error fixes. We also had to change our element types and styles to adjust for certain looks we were going for and conducting trial and error a ton.

Second Lab:

Many of our challenges came from JavaScript difficulties and forgetting to use arrow functions which caused technical difficulties. We also faced massive challenges trying to figure out an animation from moving tasks from incomplete to the other tabs to make the "clicking checkmark" experience for a task less jarring for users. Ultimately we couldn't figure it out and had to put this task on the backburner. More generally, we struggled with figuring out how to have a consistent background color (such that as a user scrolls there is no stop to the background color), and figuring out how to color the tabs to our liking since we are using a react tabs package that was not totally under our control.

<br><br>
### 4. Parts of the design you're most proud of

First Lab:

The part of the design we’re the proudest of is getting this to-do application to look like a folder. A lot of varying elements went into this, from rounding the edges of the buttons, to editing borders of specific sides to make the look of folder tabs consistent.

Second Lab:
The proudest part of our design is probably our pop up module. We pride ourselves in being able to get the pop-up module to work, but also that the rest of the page is dimmed and that a user can click outside of the module or use the cancel button in order to escape. Overall, we're really proud of our design consistency and the progress since the last lab.
