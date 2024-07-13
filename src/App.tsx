import { QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './pages/Root'
import HomePage from './pages/Home'
import MoviePage from './pages/Movie'
import TvPage from './pages/Tv'
import BookmarkPage from './pages/Bookmark'
import { queryClient } from './util/http'

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
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
