# Prioritzer
A web app that calculates the importance and put tasks to their priorities.

### Feature

Task Page
  - New task button to Create Task Page
  - Create Task Page to add new task
  - Display created tasks
    - Sortable tasks (planning for training mode only)

Header
  - Navigate to login page
  - Logout button

Login Page
  - Login or register with email and password

### To Do

- Learn Tensorflow to see if I can use it to train an AI to sort the tasks based on their properties.

### Dev Notes

(06/29/2023)

Implemented task setting menu.
I wasn't thinking about having a sortable task table but I think it will be helpful if I want to implement train mode where user can toggle and train the AI (which is not implemented yet) to learn the priority of tasks by changing the order of the tasks.
So I decided to implement a sortable table. I searched for React sortable table and eventually found the package @dnd-kit as well as an example of draggable table where I can use.
I had to figure out what kind of parameters it is expecting, and in the process I learned a lot of things including react-table.
It took me a long time to get it work in my app, and although there are many things that need to improve (like the ceil size when dragging and the border color), I am glad that I got it worked.
I have documented the reference in my Notion and I think I will also add in the app documentation.

(06/28/2023)

Today I hooked up the authentication as well as local storage and firebase storage for the tasks.
Next I will be working on menu button for every tasks so the user can edit or delete the tasks.
Currently I found I can use `event.currentTarget.getBoundingClientRect()` in the click event so that I will probably be able to render the popup menu right under the button.

(06/26/2023)

Rough plan:

Frontend
- Place to display tasks with basic properties
- Window to add task
- Window to configure property weights, perhapes a slider

Backend
- Calculate proprity scores

Idea
- Basic properties of a task:
  - Name
  - Due
  - Labels
  - Est time
  - Progress: #%
  - (Considering) Subtasks
- Example
  - Lables: AI
  - Name: Let's build GPT tutorial
  - Due: None
  - Est: 12 hours
  - Progress: 38 %
- Customizable weights for each properties
  - Weights
    - Labels
      - AI = x5
    - Due = x 10 / (left minutes + 1) OR if None then x 1
    - Est = if time < 10 { x10 } else if time < 30 { x5 } else if time < 60 { x2 } else if None { x1 }
    - Progress = x 3 x %
