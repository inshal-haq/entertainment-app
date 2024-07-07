import classes from './MainHeader.module.css'
import logo from '../assets/logo.svg'
import imageAvatar from '../assets/image-avatar.png'
import homeIcon from '../assets/icon-nav-home.svg'
import movieIcon from '../assets/icon-nav-movies.svg'
import tvIcon from '../assets/icon-nav-tv-series.svg'
import bookmarkIcon from '../assets/icon-nav-bookmark.svg'

const MainHeader: React.FC = () => {
	return (
		<header className={classes.header}>
			<img className={classes.logo} src={logo} alt='Logo' />
			<nav className={classes.nav}>
				<a href=''>
					<img src={homeIcon} alt='Home icon' />
				</a>
				<a href=''>
					<img src={movieIcon} alt='Movie icon' />
				</a>
				<a href=''>
					<img src={tvIcon} alt='TV icon' />
				</a>
				<a href=''>
					<img src={bookmarkIcon} alt='Bookmark icon' />
				</a>
			</nav>
			<img className={classes.avatar} src={imageAvatar} alt='Profile image' />
		</header>
	)
}

export default MainHeader
