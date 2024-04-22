import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import RepoDetails from './RepoDetails';
import ErrorBoundary from './ErrorBoundary';
import Error404 from './Error404';


function App() {
 

  return (
    <ErrorBoundary>
      <Router>
        <NavBar/>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repodetails/:id" element={<RepoDetails />} />
        
          <Route path="*" element={<Error404 />} />
        </Routes>
      
    
    </Router>
    </ErrorBoundary>
  );
}

export default App;
