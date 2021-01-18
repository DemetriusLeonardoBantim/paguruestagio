import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'



import Home from './components/Home'
import Login from './components/Login/Login'
import LoginCriar from './components/Login/LoginCriar'


const Routes = () => {
 return(
  <BrowserRouter>
    <Route component={Home} path="/" exact/>
    <Route component={Login} path="/login"/>
    <Route component={LoginCriar} path="/criar"/>
  </BrowserRouter>
 )
}

export default Routes
