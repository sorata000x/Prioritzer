import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [{tasks, user}, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      navigate(`/${user?.uid}`);
    }
  }, [user])

  const Login = () => {
    return (
      <Link to={!user && '/login'}>
        <IconButton className="user_icon" size="large">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Link>
    )
  }

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SIGN_OUT",
      })
      navigate('/');
    }
  }

  const Info = () => {
    return (
      <IconButton className="user_btn" size="large" onClick={handleAuthentication}>
        <AccountCircleIcon className="active" fontSize="large" />
      </IconButton>
    )
  }

  const User = () => {
    if (user) {
      return <Info />
    }
    return <Login />
  }

  return (
    <div className='header'>
      <User />
    </div>
  )
}

export default Header
