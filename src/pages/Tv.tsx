import { useState } from 'react'
import { useAtom } from 'jotai'
import { totalSearchResultsAtom } from '../util/atoms'
import { fetchSearchResults, fetchTrending } from '../util/http'

import Search from '../components/Search'
import MediaList from '../components/MediaList'

const Tv: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [totalSearchResults, setTotalSearchResults] = useAtom(totalSearchResultsAtom)

	return (
		<>
			<Search placeholder='Search for TV series' setSearchTerm={setSearchTerm} />
			{!searchTerm && (
				<>
					<MediaList
						title='TV Series'
						queryKey={['media', 'tv', 'day']}
						queryFn={() => fetchTrending({ category: 'tv', time: 'day' })}
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
					queryKey={['media', 'tv', 'day', { search: searchTerm }]}
					queryFn={() => fetchSearchResults({ category: 'tv', searchTerm })}
					setTotalSearchResults={setTotalSearchResults}
					isShowList
					isTopContainer
				/>
			)}
		</>
	)
}

export default Tv
