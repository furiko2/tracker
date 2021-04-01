
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import ButtonVar from './components/Button';
import InputForm from "./components/InputForm";
import Profile from "./components/Profile";
import {UserContext} from './components/UserContext';


import React,{ useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

export default function App() {
  
 
  const { user, isLoading } = useAuth0();
  

  return (
    <Router>
    <>
    <Navbar/ >
     <Switch>
     <UserContext.Provider value = {user}>
     <Route path="/" exact component={isLoading?Loading:Profile}  />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/newtask" component={TaskCreate} />
          <ProtectedRoute path="/tasks" component={TaskList} />
          </UserContext.Provider>
     </Switch>
     </>
    </Router>
  );
}



