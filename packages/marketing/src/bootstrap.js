import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client';

const mount = (el) => {
  createRoot(el).render(<App />)
}
console.log('markting')

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketin-dev-root')
  if(devRoot){
    mount(devRoot)
  }
}

export { mount };

