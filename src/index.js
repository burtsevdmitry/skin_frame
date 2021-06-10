import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './skin-frame/skin-frame.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
