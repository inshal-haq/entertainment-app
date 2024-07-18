import { useState } from 'react'
import { useAtom } from 'jotai'
import { totalSearchResultsAtom } from '../util/atoms'
import { fetchRecommended, fetchSearchResults } from '../util/http'

import Search from '../components/Search'
import TrendingList from '../components/TrendingList'
import MediaList from '../components/MediaList'

const Home: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [totalSearchResults, setTotalSearchResults] = useAtom(totalSearchResultsAtom)

	return (
		<>
			<Search placeholder='Search for movies or TV series' setSearchTerm={setSearchTerm} />
			{!searchTerm && (
				<>
					<TrendingList />
					<MediaList
						title='Recommended for you'
						queryKey={['media', 'all', 'day']}
						queryFn={fetchRecommended}
						staleTime={43200000} // 12 hours in ms since api data is a daily list
					/>
				</>
			)}
			{searchTerm && (
				<MediaList
					title={`Found ${totalSearchResults} result${
						totalSearchResults !== 1 ? 's' : ''
					} for '${searchTerm}'`}
					queryKey={['media', 'all', 'day', { search: searchTerm }]}
					queryFn={() => fetchSearchResults({ category: 'multi', searchTerm })}
					staleTime={43200000} // 12 hours in ms since api data is a daily list
					setTotalSearchResults={setTotalSearchResults}
					isTopContainer
				/>
			)}
		</>
	)
}

export default Home
