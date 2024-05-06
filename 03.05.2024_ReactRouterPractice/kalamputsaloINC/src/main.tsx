// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRouter from './routes/MainRouter.tsx'
// import { BrowserRouter } from 'react-router-dom'


import { RouterProvider } from "react-router-dom";

export const App = () => <RouterProvider router={MainRouter} />;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
