import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import './css/cards.css'
// import { Cards } from './Cards'
import './css/qrcode.css'
import {QRCode} from './QRCode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> 
  <Cards />
  */}
  <QRCode /> 

  </React.StrictMode>,
)
