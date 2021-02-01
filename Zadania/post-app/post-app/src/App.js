import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import GetPost from './components/GetPost';
import AddPost from './components/AddPost';


function App() {
  return (
    <div className="App">
     <Router>
       <Link to='/'>
         <span className='span-app'>Post</span>
       </Link>
       <Link to='/addpost'>
         <span className='span-app'>Add post</span>
       </Link>

      <Route exact path='/' component={GetPost}></Route>
      <Route exact path='/addpost' component={AddPost}></Route>

     </Router>
    </div>
  );
}

export default App;
