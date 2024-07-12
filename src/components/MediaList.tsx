import MediaItem from './MediaItem'
import classes from './MediaList.module.css'

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interface Props {
	title: string
}

const MediaList: React.FC<Props> = ({ title }) => {
	return (
		<section className={classes.container}>
			<h1>{title}</h1>
			<div className={classes.cardContainer}>
				{dummy.map((id) => (
					<MediaItem key={id} />
				))}
			</div>
		</section>
	)
}

export default MediaList
