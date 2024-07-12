import Search from '../components/Search'
import TrendingList from '../components/TrendingList'

const Home: React.FC = () => {
	return (
		<>
			<Search placeholder='Search for movies or TV series' />
			<TrendingList />
		</>
	)
}

export default Home
