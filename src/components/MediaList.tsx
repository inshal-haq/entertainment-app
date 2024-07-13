import { useQuery } from '@tanstack/react-query'
import MediaItem from './MediaItem'
import classes from './MediaList.module.css'
import { Media } from '../types/media'

interface Props {
	title: string
	fetchCategory: () => Promise<Media[]>
}

const MediaList: React.FC<Props> = ({ title, fetchCategory }) => {
	const { data } = useQuery({
		queryKey: ['media', 'trending', 'day'],
		queryFn: fetchCategory,
		staleTime: 43200000, // 12 hours in ms - daily trending list
	})

	return (
		<section className={classes.container}>
			<h1>{title}</h1>
			{data && (
				<div className={classes.cardContainer}>
					{data.map((media: Media) => (
						<MediaItem key={media.id} media={media} />
					))}
				</div>
			)}
		</section>
	)
}

export default MediaList
