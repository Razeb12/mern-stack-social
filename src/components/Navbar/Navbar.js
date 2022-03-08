import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Container } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import brandLogo from '../../images/earth-logo.png';
import brandText from '../../images/logo-text.png';
import * as actionType from '../../constants/actionTypes'; 
import useStyles from './styles';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // console.log(user);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        navigate('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    return (
       <Container>
           <AppBar className={classes.appBar} position="fixed"  elevation={3}>
      <Link to="/" className={classes.brandContainer}>
        
        <img className={classes.image} src={brandLogo} alt="icon" height="60px" />
        <img className={classes.image2} component={Link} to="/" src={brandText} alt="icon" height="45px" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
         
            <PowerSettingsNewIcon className={classes.iCon} onClick={logout}/>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
       
       </Container>
    );
};

export default Navbar;