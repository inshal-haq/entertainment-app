import classes from './TrendingList.module.css'
import { Media } from '../types/media'

import TrendingItem from './TrendingItem'
import { useQuery } from '@tanstack/react-query'
import { fetchTrending } from '../util/http'

const TrendingList = () => {
	const { data } = useQuery({
		queryKey: ['media', 'trending'],
		queryFn: fetchTrending,
		staleTime: 691200000, // 8 days in ms, using 8 to pass 1 week mark since this is weekly trending list
	})

	return (
		<section className={classes.container}>
			<h1 className={classes.title}>Trending</h1>
			{data && (
				<div className={classes.cardContainer}>
					{data.map((media: Media) => (
						<TrendingItem key={media.id} media={media} />
					))}
				</div>
			)}
		</section>
	)
}

export default TrendingList
