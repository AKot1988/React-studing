import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, Team } from '../pages'

import { ROUTES_NAMES } from './routesNames'

const MainRouter = createBrowserRouter([
	{
		path: ROUTES_NAMES.HOME,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home/>,
			},
			{
				path: ROUTES_NAMES.ABOUT,
				element: <About/>,
			},
			{
				path: ROUTES_NAMES.TEAM,
				element: <Team/>,
			},
		]
	},

])

export default MainRouter