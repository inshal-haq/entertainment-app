import { useState } from 'react'
import { fetchRecommended, fetchSearchResults } from '../util/http'

import Search from '../components/Search'
import TrendingList from '../components/TrendingList'
import MediaList from '../components/MediaList'

const Home: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [numOfSearchResults, setNumOfSearchResults] = useState(0)

	return (
		<>
			<Search placeholder='Search for movies or TV series' setSearchTerm={setSearchTerm} />
			{!searchTerm && (
				<>
					<TrendingList />
					<MediaList
						title='Recommended for you'
						queryKey={['media', 'trending', 'day']}
						queryFn={fetchRecommended}
						staleTime={43200000} // 12 hours in ms since api data is a daily trending list
					/>
				</>
			)}
			{searchTerm && (
				<MediaList
					title={`Found ${numOfSearchResults} result${
						numOfSearchResults !== 1 ? 's' : ''
					} for '${searchTerm}'`}
					queryKey={['media', { search: searchTerm }]}
					queryFn={() => fetchSearchResults(searchTerm)}
					setNumOfSearchResults={setNumOfSearchResults}
				/>
			)}
		</>
	)
}

export default Home
