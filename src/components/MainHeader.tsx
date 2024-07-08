import { NavLink } from 'react-router-dom'

import classes from './MainHeader.module.css'
import logo from '../assets/logo.svg'
import imageAvatar from '../assets/image-avatar.png'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import { FilmIcon } from '@heroicons/react/24/solid'
import { TvIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/solid'

const MainHeader: React.FC = () => {
	return (
		<header className={classes.header}>
			<img className={classes.logo} src={logo} alt='Logo' />
			<nav className={classes.nav}>
				<NavLink to='/'>
					{({ isActive }) =>
						isActive ? (
							<Squares2X2Icon className={classes.iconActive} />
						) : (
							<Squares2X2Icon className={classes.icon} />
						)
					}
				</NavLink>
				<NavLink to='/movies'>
					{({ isActive }) =>
						isActive ? (
							<FilmIcon className={classes.iconActive} />
						) : (
							<FilmIcon className={classes.icon} />
						)
					}
				</NavLink>
				<NavLink to='/tv-series'>
					{({ isActive }) =>
						isActive ? (
							<TvIcon className={classes.iconActive} />
						) : (
							<TvIcon className={classes.icon} />
						)
					}
				</NavLink>
				<NavLink to='/bookmarks'>
					{({ isActive }) =>
						isActive ? (
							<BookmarkIcon className={classes.iconActive} />
						) : (
							<BookmarkIcon className={classes.icon} />
						)
					}
				</NavLink>
			</nav>
			<img className={classes.avatar} src={imageAvatar} alt='Profile image' />
		</header>
	)
}

export default MainHeader
