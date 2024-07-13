import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import classes from './Search.module.css'
import useScrollDirection from '../hooks/useScrollDirection'
import { useEffect, useState } from 'react'

interface Props {
	placeholder: string
}

const Search: React.FC<Props> = ({ placeholder }) => {
	const scrollDirection = useScrollDirection()
	const [hidden, setHidden] = useState(false)

	useEffect(() => {
		if (scrollDirection === 'down') {
			setHidden(true)
		} else if (scrollDirection === 'up') {
			setHidden(false)
		}
	}, [scrollDirection])

	return (
		<h2 className={`${classes.searchBar} ${hidden ? classes.hidden : ''}`}>
			<MagnifyingGlassIcon className={classes.icon} />
			<input type='search' placeholder={placeholder} className={classes.search} />
		</h2>
	)
}

export default Search
