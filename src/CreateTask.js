import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';
import './CreateTask.css';
import { v4 as uuid } from 'uuid';

function CreateTask() {
  const [{}, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_TASK",
      task: {
        id: uuid(),
        title: e.target[0].value,
        progress: 0,
        labels: e.target[1].value,
        duration: e.target[2].value,
        startDate: e.target[3].value,
        endDate: e.target[4].value,
        description: e.target[5].value
      }
    });
    navigate('/');
  }

  const close = () => {
    navigate('/');
  }

  return (
    <div className='create_task_container'>
      <div className='filter_popup' onClick={close}></div>
      <div className='create_task_popup'>
        <div className="new_task">New Task</div>
        <form onSubmit={handleSubmit}>
          <div class="form-group item-w2">
            <label for="taskTitle">Task Title</label>
            <input 
              type="text"
              className="form-control" 
              id="taskTitle"
              />
          </div>
          <div class="form-group">
            <label for="labels">Labels</label>
            <input 
              type="text" 
              className="form-control" 
              id="labels"
              />
          </div>
          <div class="form-group">
            <label for="duration">Duration</label>
            <input 
              type="number" 
              className="form-control" 
              id="duration"
              />
          </div>
          <div class="form-group">
            <label for="startDate">Start Date</label>
            <input 
              type="datetime-local" 
              className="form-control item-w1" 
              id="startDate"
              />
          </div>
          <div class="form-group">
            <label for="endDate">End Date</label>
            <input 
              type="datetime-local" 
              className="form-control item-w1" 
              id="endDate"
              />
          </div>
          <div class="form-group item-w2">
            <label for="description">Description</label>
            <textarea 
              class="form-control description" 
              id="description" 
              rows="3"
              />
          </div>
          <div className="action">
            <button type="submit" className='abtn abtn_add' >Add</button>
            <button type="button" className='abtn abtn_cancel' onClick={close}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
