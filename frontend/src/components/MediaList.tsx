/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import classes from './MediaList.module.css'
import { Media } from '../types/media'

import MediaItem from './MediaItem'

interface Props {
	title: string
	queryKey: any[]
	queryFn: () => Promise<Media[]>
	staleTime?: number
	setTotalSearchResults?: (total: number) => void
	isMovieList?: boolean
	isShowList?: boolean
	isTopContainer?: boolean
}

const MediaList: React.FC<Props> = ({
	title,
	queryKey,
	queryFn,
	staleTime,
	setTotalSearchResults,
	isMovieList,
	isShowList,
	isTopContainer,
}) => {
	const { data } = useQuery({ queryKey, queryFn, staleTime })

	useEffect(() => {
		if (setTotalSearchResults && data) {
			setTotalSearchResults(data.length)
		}
	}, [setTotalSearchResults, data])

	const containerStyle = isTopContainer ? classes.topContainer : classes.container

	return (
		<section className={containerStyle}>
			<h1>{title}</h1>
			{data && (
				<div className={classes.cardContainer}>
					{data.map((media: Media) => (
						<MediaItem key={media.id} media={media} isMovie={isMovieList} isShow={isShowList} />
					))}
				</div>
			)}
		</section>
	)
}

export default MediaList
