import { useAtom } from 'jotai'
import { bookmarksAtom } from '../util/atoms'
import { Media } from '../types/media'
import classes from './BookmarkList.module.css'

import MediaItem from './MediaItem'

interface Props {
	title?: string
	bookmarkSearchResults?: Media[]
	isSearching?: boolean
}

const BookmarkList: React.FC<Props> = ({ title, bookmarkSearchResults, isSearching }) => {
	const [bookmarks] = useAtom(bookmarksAtom)
	const bookmarkedMovies: Media[] = []
	const bookmarkedShows: Media[] = []

	bookmarks.forEach((bookmark) => {
		if (bookmark.media_type === 'movie') {
			bookmarkedMovies.push(bookmark)
		} else {
			bookmarkedShows.push(bookmark)
		}
	})

	return (
		<>
			{isSearching && (
				<section className={classes.topContainer}>
					<h1>{title}</h1>
					{bookmarkSearchResults && (
						<div className={classes.cardContainer}>
							{bookmarkSearchResults.map((media: Media) => (
								<MediaItem key={media.id} media={media} />
							))}
						</div>
					)}
				</section>
			)}
			{!isSearching && (
				<>
					<section className={classes.topContainer}>
						<h1>Bookmarked Movies</h1>
						{bookmarks && (
							<div className={classes.cardContainer}>
								{bookmarkedMovies.map((media: Media) => (
									<MediaItem key={media.id} media={media} />
								))}
							</div>
						)}
					</section>
					<section className={classes.container}>
						<h1>Bookmarked TV Series</h1>
						{bookmarks && (
							<div className={classes.cardContainer}>
								{bookmarkedShows.map((media: Media) => (
									<MediaItem key={media.id} media={media} />
								))}
							</div>
						)}
					</section>
				</>
			)}
		</>
	)
}

export default BookmarkList
