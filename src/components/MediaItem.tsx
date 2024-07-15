import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import classes from './MediaItem.module.css'
import { Media } from '../types/media'

import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkedIcon } from '@heroicons/react/24/solid'
import { bookmarksAtom } from '../util/atoms'

interface Props {
	media: Media
	isMovie?: boolean
	isShow?: boolean
}

const MediaItem: React.FC<Props> = ({ media, isMovie, isShow }) => {
	const [bookmarks, setBookmarks] = useAtom(bookmarksAtom)
	const [isBookmarked, setIsBookmarked] = useState(false)

	const { id, title, name, backdrop_path, poster_path, media_type, release_date, first_air_date } =
		media
	const image = backdrop_path || poster_path
	const year = release_date?.slice(0, 4) || first_air_date?.slice(0, 4)
	const found = bookmarks.find((bookmark) => bookmark.id === id)

	let type = media_type === 'movie' ? 'Movie' : 'TV Series'
	if (isMovie) type = 'Movie'
	if (isShow) type = 'TV Series'

	useEffect(() => {
		if (found) {
			setIsBookmarked(true)
		}
	}, [found])

	function handleToggleBookmark() {
		let newBookmarks

		if (found) {
			newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id)
			setIsBookmarked(false)
		} else {
			newBookmarks = [
				...bookmarks,
				{ id, title, name, backdrop_path, poster_path, media_type, release_date, first_air_date },
			]
			setIsBookmarked(true)
		}

		setBookmarks(newBookmarks)
	}

	return (
		<div>
			<div
				className={classes.card}
				style={{
					backgroundImage: `url('https://image.tmdb.org/t/p/w500/${image}')`,
				}}
			>
				<div className={classes.iconContainer} onClick={handleToggleBookmark}>
					{isBookmarked ? (
						<BookmarkedIcon className={classes.icon} />
					) : (
						<BookmarkIcon className={classes.icon} />
					)}
				</div>
			</div>
			<div className={classes.detailsContainer}>
				{year ? (
					<p>
						{year} &bull; {type}
					</p>
				) : (
					<p>{type}</p>
				)}
				<h4>{title || name}</h4>
			</div>
		</div>
	)
}

export default MediaItem
