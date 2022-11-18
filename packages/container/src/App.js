import React from  'react';
import MarketingApp from './components/MarketingApp'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
export default () => {
  return <div>
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  </div>
}