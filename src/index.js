import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoProvider from './store/TodoProvider';
import DarkModeProvider from './store/DarkModeProvider';
import ListModeProvider from './store/ListModeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoProvider>
    <DarkModeProvider>
    <ListModeProvider>
    <App />
    </ListModeProvider>
    </DarkModeProvider>
    </TodoProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
