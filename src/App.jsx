import { useState } from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import './App.css'
import Home from './Home'
import Create from "./Create.jsx";
import Update from "./Update.jsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/create'} element={<Create/>}/>
                <Route path={'/edit/:id'} element={<Update/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
