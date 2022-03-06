import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

// const App = () => (   <BrowserRouter>     <Container maxWidth="lg">
// <Navbar />       <Routes>         <Route path="/" exact element={<Home/>} />
//        <Route path="/auth" exact element={<Auth/>} />       </Routes>
// </Container>   </BrowserRouter> );

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar/>
                <Routes>
                    {/* <Route path="/" exact element={<Home/>} />
      <Route path="auth" exact element={<Auth/>} /> */}
                    <Route path="/" exact element={< Home />}/>
                    <Route path="/posts" exact element={< Home />}/>
                    <Route path="/posts/search" exact element={< Home />}/>
                    <Route path="/posts/:id" exact element={< PostDetails />}/>
                    <Route path="/creators/:name" element={< CreatorOrTag />}/>
                    <Route path="/tags/:name" element={< CreatorOrTag />}/>
                    <Route path="auth" exact element={< Auth />}/> 
                    <Route path="/auth" exact element={() => (!user ? <Auth /> : <Home/>)} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;