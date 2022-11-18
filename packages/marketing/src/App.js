import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
  return <div>
      <StylesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route exact path="/pricing" element={<Pricing />} />
          </Routes>
        </Router>
      </StylesProvider>   
  </div>
}