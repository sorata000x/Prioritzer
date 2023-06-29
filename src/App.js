import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Tasks from './Tasks';
import CreateTask from './CreateTask';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider';
import Header from './Header';
import Login from './Login';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [{tasks, user}, dispatch] = useStateValue();

  const setUserTasks = async () => {
    let userDoc = await getDoc(doc(db, "users", user?.uid))
    if (userDoc.data()) {
      let userTasks = JSON.parse(userDoc.data().tasks)
      dispatch({
        type: 'SET_TASKS',
        tasks: userTasks ? userTasks : []
      })
    }
  }

  useEffect(() => {
    if (user) {
      setUserTasks();
    }
  }, [user])

  useEffect(() => {
    // only run once when app component loads

    auth.onAuthStateChanged(async authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Link to="/createTask">
                  <button className="new_task_btn"> New Task </button>
                </Link>
                <Tasks />
              </>
            }
          />
          <Route
            path={`/:pathParam?`}
            element={
              <>
                <Header />
                <Link to="/createTask">
                  <button className="new_task_btn"> New Task </button>
                </Link>
                <Tasks />
              </>
            }
          />
          <Route
            path="/createTask"
            element={
              <>
                <Header />
                <Link to="/createTask">
                  <button className="new_task_btn"> New Task </button>
                </Link>
                <Tasks />
                <CreateTask />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
