import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Tasks from './Tasks';
import CreateTask from './CreateTask';

function Priority() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (properties) => {
    setTasks([...tasks, properties]);
  }

  return (
    <div>

    </div>
  )
}

export default Priority
