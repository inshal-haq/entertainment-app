import { useState } from 'react'
import { useAtom } from 'jotai'
import { bookmarksAtom } from '../store/atoms'

import Search from '../components/Search'
import BookmarkList from '../components/BookmarkList'

const Bookmark: React.FC = () => {
	const [bookmarks] = useAtom(bookmarksAtom)
	const [searchTerm, setSearchTerm] = useState('')

	const bookmarkSearchResults = bookmarks.filter((bookmark) =>
		JSON.stringify(bookmark).toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<>
			<Search placeholder='Search your bookmarked media' setSearchTerm={setSearchTerm} />
			{searchTerm && (
				<BookmarkList
					title={`Found ${bookmarkSearchResults.length} result${
						bookmarkSearchResults.length !== 1 ? 's' : ''
					} for '${searchTerm}'`}
					bookmarkSearchResults={bookmarkSearchResults}
					isSearching
				/>
			)}
			{!searchTerm && <BookmarkList />}
		</>
	)
}

export default Bookmark
