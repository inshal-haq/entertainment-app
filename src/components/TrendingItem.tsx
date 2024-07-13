import { useState } from 'react'
import classes from './TrendingItem.module.css'
import { Media } from '../types/media'

import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkedIcon } from '@heroicons/react/24/solid'

interface Props {
	media: Media
}

const TrendingItem: React.FC<Props> = ({ media }) => {
	const [isBookmarked, setIsBookmarked] = useState(false)

	const { title, name, backdrop_path, media_type, release_date, first_air_date } = media
	const type = media_type === 'movie' ? 'Movie' : 'TV Series'
	const year = release_date?.slice(0, 4) || first_air_date?.slice(0, 4)

	return (
		<div
			className={classes.card}
			style={{
				backgroundImage: `url('https://image.tmdb.org/t/p/w500/${backdrop_path}')`,
			}}
		>
			<div
				className={classes.iconContainer}
				onClick={() => setIsBookmarked((prevState) => !prevState)}
			>
				{isBookmarked ? (
					<BookmarkedIcon className={classes.icon} />
				) : (
					<BookmarkIcon className={classes.icon} />
				)}
			</div>
			<div className={classes.detailsContainer}>
				<div>
					{year} &bull; {type}
				</div>
				<h3>{title || name}</h3>
			</div>
		</div>
	)
}

export default TrendingItem
