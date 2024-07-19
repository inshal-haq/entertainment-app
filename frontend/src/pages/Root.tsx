import { Outlet } from 'react-router-dom'

import classes from './Root.module.css'
import MainHeader from '../components/MainHeader'

const RootLayout: React.FC = () => {
	return (
		<>
			<MainHeader />
			<main className={classes.main}>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout
