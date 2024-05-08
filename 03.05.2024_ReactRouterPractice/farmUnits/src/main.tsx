import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import router from './routes/router.tsx'
import './index.css'


import { RouterProvider } from "react-router-dom";

const App = () => <RouterProvider router={router} />;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);