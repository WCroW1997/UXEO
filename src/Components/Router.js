import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Course from './Course'
import NotFound from './NotFound';
import App from '../App';

const RouterPage = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/course' element={<Course/>} />
                <Route element={NotFound}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPage
