import classes from './Trending.module.css'

import TrendingCard from './TrendingCard'

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Trending = () => {
	return (
		<section className={classes.trending}>
			<h1 className={classes.title}>Trending</h1>
			<div className={classes.cardContainer}>
				{dummy.map((id) => (
					<TrendingCard key={id} />
				))}
			</div>
		</section>
	)
}

export default Trending
