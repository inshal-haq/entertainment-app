import { Outlet } from 'react-router-dom'

import MainHeader from '../components/MainHeader'
import MainNavigation from '../components/MainNavigation'

const RootLayout: React.FC = () => {
	return (
		<>
			<MainHeader />
			<main>
				<Outlet />
			</main>
			<MainNavigation />
		</>
	)
}

export default RootLayout
