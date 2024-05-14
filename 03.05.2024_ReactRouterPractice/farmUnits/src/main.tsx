import ReactDOM from 'react-dom/client'
import { router } from './routes'
import './index.css'


import { RouterProvider } from "react-router-dom";

const App = () => <RouterProvider router={router} />;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);