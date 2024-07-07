import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './pages/Root'
import HomePage from './pages/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [{ index: true, element: <HomePage /> }],
	},
])

const App: React.FC = () => {
	return <RouterProvider router={router} />
}

export default App
