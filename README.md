# Prioritzer
A web app that calculates the importance and put tasks to their priorities.

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
