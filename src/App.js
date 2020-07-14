import React from 'react'
import Home from './Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Navbar'
import Footer from './Footer'
 function App() {
  return (
    <div>
           <Navbar/>
           <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route  exact path='/contact' component={Contact}/>
                        <Route  exact path='/service' component={Services}/>
                        <Redirect to='/'/>
           </Switch>
           <Footer/>
    </div>
  )
}

export default App



