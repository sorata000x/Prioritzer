import React, { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tasks.css'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import EditOutlineIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlineIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Tasks() {
  const [{tasks, user}, dispatch] = useStateValue();
  const [menuStyle, setMenuStyle] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [menuId, setMenuId] = useState();

  const handleDeleteButton = (id) => {
    dispatch({
      type: "REMOVE_TASK",
      id: id,
    })
    setShowMenu(false);
  }

  const Menu = () => {
    return (
      <div className='popup_menu' style={menuStyle}>
        <IconButton className='menu_button'>
          <EditOutlineIcon className='button_icon'/>
          Edit Task
        </IconButton>
        <IconButton className='menu_button'>
          <ArchiveOutlineIcon className='button_icon'/>
          Move to Archive
        </IconButton>
        <IconButton className='menu_button' onClick={(e) => handleDeleteButton(menuId)}>
          <DeleteOutlineIcon className='button_icon'/>
          Delete Task
        </IconButton>
      </div>
    )
  }

  const handleSettingClick = (e, taskId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!showMenu) {
      setMenuStyle({
        top: rect.bottom,
        left: rect.left,
      })
      setMenuId(taskId);
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  const displayTasks = () => {
    return (
      tasks.map((task, i) => {
        return (
        <tr>
          <IconButton onClick={(e)=>handleSettingClick(e, task.id)}>
            <SettingsIcon fontSize='small'/>
          </IconButton>

          <th scope="row">{i}</th>
          <td>{task.taskTitle}</td>
          <td>{task.progress}</td>
          <td>{task.labels}</td>
          <td>{task.duration}</td>
          <td>{task.startDate}</td>
          <td>{task.endDate}</td>
          <td>{task.description}</td>
        </tr>
        )
      })
    )
  }

  return (
    <>
      {showMenu && <Menu />}
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Progress</th>
            <th scope="col">Labels</th>
            <th scope="col">Start Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Duration</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
        { displayTasks() }
        </tbody>
      </table>
    </>
  )
}

export default Tasks
