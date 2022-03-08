import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
      <Container maxWidth="xl">
        <BrowserRouter>
           
                <Navbar/>
                <Routes>
                    <Route index element={< Home />}/>
                    <Route path="posts" exact element={< Home />}/>
                    <Route path="posts/search" exact element={< Home />}/>
                    <Route path="posts/:id" exact element={< PostDetails />}/>
                    <Route path="creators/:name" element={< CreatorOrTag />}/>
                    <Route path="tags/:name" element={< CreatorOrTag />}/>        
                    <Route path="auth"  element={!user ? <Auth /> : <Home/>} />
                </Routes>
         
        </BrowserRouter>
        </Container>
    );
};

export default App;