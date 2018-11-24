import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
 
const theme = createMuiTheme({
   typography: {
     useNextVariants: true,
   }
 });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
    , document.getElementById('root')
);