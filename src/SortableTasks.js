import React from 'react'
import { useStateValue } from "./StateProvider";
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import './SortableTasks.css';
import { Table } from './components/Table';

function SortableTasks() {
  const [{tasks, user}, dispatch] = useStateValue();
  const columns = [{
      Header: 'Title',
      accessor: 'title'
    }, {
      Header: 'Progress',
      accessor: 'progress'
    }, {
      Header: 'Labels',
      accessor: 'labels'
    }, {
      Header: 'Start Date',
      accessor: 'startDate'
    }, {
      Header: 'End Date',
      accessor: 'endDate'
    }, {
      Header: 'Duration',
      accessor: 'duration'
    }
  ]

  const setTasks = (getNewTasks) => {
    dispatch({
      type: "SET_TASKS",
      tasks: getNewTasks(tasks),
    })
  }

  return (
    <Table columns={columns} data={tasks} setData={setTasks}/>
  )
}

export default SortableTasks
