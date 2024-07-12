import { useState } from 'react'

import classes from './TrendingItem.module.css'

import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkedIcon } from '@heroicons/react/24/solid'

const TrendingItem = () => {
	const [isBookmarked, setIsBookmarked] = useState(false)

	return (
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
			<div className={classes.detailsContainer}>
				<div>2019 . Movie . PG</div>
				<h3>Beyond Earth</h3>
			</div>
		</div>
	)
}

export default TrendingItem
