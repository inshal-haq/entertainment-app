/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import MediaItem from './MediaItem'
import classes from './MediaList.module.css'
import { Media } from '../types/media'

interface Props {
	title: string
	queryKey: any[]
	queryFn: () => Promise<Media[]>
	staleTime?: number
	setNumOfSearchResults?: (total: number) => void
}

const MediaList: React.FC<Props> = ({
	title,
	queryKey,
	queryFn,
	staleTime,
	setNumOfSearchResults,
}) => {
	const { data } = useQuery({ queryKey, queryFn, staleTime })

	if (setNumOfSearchResults && data) {
		setNumOfSearchResults(data.length)
	}

	const containerStyle = setNumOfSearchResults ? classes.searchContainer : classes.container

	return (
		<section className={containerStyle}>
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
