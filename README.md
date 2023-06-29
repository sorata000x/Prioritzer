# Prioritzer
A web app that calculates the importance and put tasks to their priorities.

(06/29/2023)

Maybe just give each task a menu so I don't need to pass things around?

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
