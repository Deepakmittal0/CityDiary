import React from 'react';
// import Place from './component/Place';

import Home from './home/Home';
import { Route, Routes }from "react-router-dom" 
import Choose1 from './choose/Choose1';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Temple from './component/Temple';

function App() {
    return (
       
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/hospital' element={<Choose1/>}></Route>
    <Route path='/temple' element={<Temple/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
</Routes></div>
    </>
    );
};


export default App;
