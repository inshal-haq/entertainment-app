import classes from './TrendingList.module.css'

import TrendingItem from './TrendingItem'

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const TrendingList = () => {
	return (
		<section className={classes.container}>
			<h1>Trending</h1>
			<div className={classes.cardContainer}>
				{dummy.map((id) => (
					<TrendingItem key={id} />
				))}
			</div>
		</section>
	)
}

export default TrendingList
