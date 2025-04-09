import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TaskState from './context/task/taskState';

const Home = React.lazy(() => import("./components/pages/Home"))

const App = () => {

  return (

    <Router>

      <TaskState>
        
        <Routes>

          <Route path='/' element={ <Home /> } />

        </Routes>

      </TaskState>

    </Router>

  )

}

export default App;