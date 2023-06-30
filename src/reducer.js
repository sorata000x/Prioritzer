import { db, auth } from './firebase';
import { doc, setDoc } from 'firebase/firestore'

let data = {
  tasks: JSON.parse(localStorage.getItem("tasks")),
}

export const initialState = {
  tasks: data.tasks ? data.tasks : [],
  user: null,
};

const setTasks = async (tasks) => {
  if (!auth.currentUser) {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } else {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      tasks: JSON.stringify(tasks),
    })
  }
}

const reducer = (state, action) => {
  console.log(`ACTION>TYPE: ${action.type}`)
  console.log(action);
  switch (action.type) {
    case "SET_TASKS":
      console.log(`set tasks to: ${JSON.stringify(action.tasks)}`)
      setTasks(action.tasks);
      return {
        ...state,
        tasks: action.tasks,
      }
    case "ADD_NEW_TASK":
      setTasks([...state.tasks, action.task]);
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case "REMOVE_TASK":
      const index = state.tasks.findIndex(
        (task) => task.id === action.id
      );
      let newTasks = [...state.tasks];
      if (index >= 0) {
        // remove task from tasks
        newTasks.splice(index, 1);
      } else {
        console.warn(
          `Failed to remove task (ID: ${action.id})`
        );
      }
      setTasks(newTasks);
      return {
        ...state,
        tasks: newTasks,
      }
    case "EMPTY_TASKS":
      setTasks([]);
      return {
        ...state,
        tasks: [],
      };
    case "SIGN_OUT":
      return {
        ...state,
        tasks: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};

export default reducer;