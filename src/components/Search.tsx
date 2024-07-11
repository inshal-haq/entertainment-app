import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import classes from './Search.module.css'

interface Props {
	placeholder: string
}

const Search: React.FC<Props> = ({ placeholder }) => {
	return (
		<h2 className={classes.searchBar}>
			<MagnifyingGlassIcon className={classes.icon} />
			<input type='search' placeholder={placeholder} className={classes.search} />
		</h2>
	)
}

export default Search
