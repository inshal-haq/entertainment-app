import classes from './Trending.module.css'

import { BookmarkIcon } from '@heroicons/react/24/outline'

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Trending = () => {
	return (
		<section className={classes.trending}>
			<h1 className={classes.title}>Trending</h1>
			<div className={classes.cardContainer}>
				{dummy.map((id) => (
					<div key={id} className={classes.card}>
						<div className={classes.iconContainer}>
							<BookmarkIcon className={classes.icon} />
						</div>
						<div className={classes.detailsContainer}>
							<div>2019 . Movie . PG</div>
							<h3>Beyond Earth</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Trending
