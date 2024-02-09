import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Donation from './component/Donation/Donation.jsx';
import Statistics from './component/Statistics/Statistics.jsx';
import DonateInformation from './component/DonateInformation/DonateInformation.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'donation',
        element: <Donation></Donation>,
        loader: () => fetch('../donation.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/:donationId',
        element: <DonateInformation></DonateInformation>,
        loader: () => fetch('../donation.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)