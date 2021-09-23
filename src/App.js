import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import StarRating from './components/containers/star-rating/StarRating'
import Home from './components/pages/home/Home'
import './App.css'
import {UserContextProvider} from './context/user'
import CreatePost from './components/containers/create-post/CreatePost'
function App() {
   return (
     
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/createPost" component={CreatePost}/> 
          </Switch>
        </Router>
      </UserContextProvider> 
   )
 }
 
 export default App
 