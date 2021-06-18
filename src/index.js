import React from 'react';
import ReactDOM from 'react-dom';
import Path from './path';
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <Path/>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
