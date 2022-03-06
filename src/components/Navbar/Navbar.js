import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Container } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

// import brandLogo from '../../images/brand-logo.png';
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
            <AppBar className={classes.appBar} position="fixed" elevation={3}>
            <div className={classes.brandContainer}>
                <Toolbar>
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="left">CyberLife</Typography>
                    {/* <img component={Link} to="/" className={classes.image} src={brandLogo} alt="icon" height="60" /> */}
                </Toolbar>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="outlined" color="inherit" >Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
       </Container>
    );
};

export default Navbar;