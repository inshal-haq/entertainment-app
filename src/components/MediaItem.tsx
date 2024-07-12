import { useState } from 'react'

import classes from './MediaItem.module.css'

import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkedIcon } from '@heroicons/react/24/solid'

const MediaItem = () => {
	const [isBookmarked, setIsBookmarked] = useState(false)

	return (
		<div>
			<div className={classes.card}>
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
				<p>2019 . Movie . PG</p>
				<h4>Beyond Earth</h4>
			</div>
		</div>
	)
}

export default MediaItem
