import MediaList from '../components/MediaList'
import Search from '../components/Search'
import TrendingList from '../components/TrendingList'
import { fetchRecommended } from '../util/http'

const Home: React.FC = () => {
	return (
		<>
			<Search placeholder='Search for movies or TV series' />
			<TrendingList />
			<MediaList title='Recommended for you' fetchCategory={fetchRecommended} />
		</>
	)
}

export default Home
