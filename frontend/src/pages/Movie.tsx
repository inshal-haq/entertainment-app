import { useState } from 'react'
import { useAtom } from 'jotai'
import { totalSearchResultsAtom } from '../store/atoms'
import { fetchSearchResults, fetchTrending } from '../util/http'

import Search from '../components/Search'
import MediaList from '../components/MediaList'

const Movie: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [totalSearchResults, setTotalSearchResults] = useAtom(totalSearchResultsAtom)

	return (
		<>
			<Search placeholder='Search for movies' setSearchTerm={setSearchTerm} />
			{!searchTerm && (
				<>
					<MediaList
						title='Movies'
						queryKey={['media', 'movie', 'day']}
						queryFn={() => fetchTrending({ category: 'movie', time: 'day' })}
						staleTime={43200000} // 12 hours in ms since api data is a daily list
						isTopContainer
					/>
				</>
			)}
			{searchTerm && (
				<MediaList
					title={`Found ${totalSearchResults} result${
						totalSearchResults !== 1 ? 's' : ''
					} for '${searchTerm}'`}
					queryKey={['media', 'movie', 'day', { search: searchTerm }]}
					queryFn={() => fetchSearchResults({ category: 'movie', searchTerm })}
					staleTime={43200000} // 12 hours in ms since api data is a daily list
					setTotalSearchResults={setTotalSearchResults}
					isMovieList
					isTopContainer
				/>
			)}
		</>
	)
}

export default Movie
