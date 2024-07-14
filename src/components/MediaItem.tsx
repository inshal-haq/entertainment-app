import { useState } from 'react'

import classes from './MediaItem.module.css'

import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkedIcon } from '@heroicons/react/24/solid'
import { Media } from '../types/media'

interface Props {
	media: Media
}

const MediaItem: React.FC<Props> = ({ media }) => {
	const [isBookmarked, setIsBookmarked] = useState(false)

	const { title, name, backdrop_path, poster_path, media_type, release_date, first_air_date } =
		media
	const image = backdrop_path || poster_path
	const type = media_type === 'movie' ? 'Movie' : 'TV Series'
	const year = release_date?.slice(0, 4) || first_air_date?.slice(0, 4)

	return (
		<div>
			<div
				className={classes.card}
				style={{
					backgroundImage: `url('https://image.tmdb.org/t/p/w500/${image}')`,
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
			</div>
			<div className={classes.detailsContainer}>
				<p>
					{year} &bull; {type}
				</p>
				<h4>{title || name}</h4>
			</div>
		</div>
	)
}

export default MediaItem
