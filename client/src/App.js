import React, { Fragment } from 'react';
import { Dashboard } from './layout/Dashboard';
import { Home } from './layout/Home';
import { Cuenta } from './layout/Count';
import { Register } from './layout/Register';
import { Report } from './layout/Report';
import { Task } from './layout/Task';
import { Createproject } from './layout/Createproject';
import { Notifications } from './layout/Notifications';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Tareas from './layout/Tareas';
import GestionProyectos from './layout/GestionProyectos';
import LogSesion from './layout/LogSesion';



function App(){
  return(
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          {/* <Route exact path='/dashboard' element={<Dashboard />} /> */}
          {/* <Route exact path='/count' element={< Cuenta />} /> */}
          <Route exact path='/login' element={<LogSesion />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/projects' element={<GestionProyectos />} />
          <Route exact path='/projects/create/task' element={<Task />} />
          <Route exact path='/projects/create' element={<Createproject />} />
          <Route exact path='/report' element={<Report />} />
          <Route exact path='/notifications' element={<Notifications />} />
          <Route exact path='/task' element={<Tareas/>} />
          
          
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
