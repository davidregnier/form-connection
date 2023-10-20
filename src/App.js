import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/signIn"  element={<SignIn />} />
        <Route path="/signUp"  element={<SignUp />}/>
        <Route path="/a-propos" />
        <Route path="/entreprise" />
      </Routes>
      </Router>
  );
}

export default App;