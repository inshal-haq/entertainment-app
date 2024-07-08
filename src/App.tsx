import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './pages/Root'
import HomePage from './pages/Home'
import MoviePage from './pages/Movie'
import TvPage from './pages/Tv'
import BookmarkPage from './pages/Bookmark'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'movies', element: <MoviePage /> },
			{ path: 'tv-series', element: <TvPage /> },
			{ path: 'bookmarks', element: <BookmarkPage /> },
		],
	},
])

const App: React.FC = () => {
	return <RouterProvider router={router} />
}

export default App
