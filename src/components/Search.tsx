import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import classes from './Search.module.css'
import useScrollDirection from '../hooks/useScrollDirection'
import { useEffect, useRef, useState } from 'react'

interface Props {
	placeholder: string
	setSearchTerm: (searchTerm: string) => void
}

const Search: React.FC<Props> = ({ placeholder, setSearchTerm }) => {
	const searchElement = useRef<HTMLInputElement | null>(null)
	const timerRef = useRef<number | null>(null)

	const scrollDirection = useScrollDirection()
	const [hidden, setHidden] = useState(false)

	useEffect(() => {
		if (scrollDirection === 'down') {
			setHidden(true)
		} else if (scrollDirection === 'up') {
			setHidden(false)
		}
	}, [scrollDirection])

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		// if we have a currently, ongoing timer, then clear it
		// thus, only after the ongoing timer is completed, do we setSearchTerm
		if (timerRef.current) {
			clearTimeout(timerRef.current)
		}

		timerRef.current = window.setTimeout(() => {
			timerRef.current = null // timerId in ref should be removed when timer expires
			setSearchTerm(e.target.value)
		}, 500)
	}

	return (
		<h2 className={`${classes.searchBar} ${hidden ? classes.hidden : ''}`}>
			<MagnifyingGlassIcon className={classes.icon} />
			<input
				type='search'
				className={classes.search}
				placeholder={placeholder}
				ref={searchElement}
				onChange={handleChange}
			/>
		</h2>
	)
}

export default Search
