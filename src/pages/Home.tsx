import Search from '../components/Search'
import Trending from '../components/Trending'

const Home: React.FC = () => {
	return (
		<>
			<Search placeholder='Search for movies or TV series' />
			<Trending />
		</>
	)
}

export default Home
