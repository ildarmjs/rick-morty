import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import EpisodesPage from './pages/EpisodesPage'
import LocationsPage from './pages/LocationsPage'
import NotFoundPage from './pages/NotFoundPage'
import OneCharacterPage from './pages/OneCharacterPage'
import { routes } from './config/routes'

const App: FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path={routes.home} element={<HomePage />} />
				<Route path={routes.characters} element={<CharactersPage />} />
				<Route path={routes.character} element={<OneCharacterPage />} />
				<Route path={routes.episodes} element={<EpisodesPage />} />
				<Route path={routes.locations} element={<LocationsPage />} />
				<Route path={routes.notFound} element={<NotFoundPage />} />
			</Routes>
		</Layout>
	)
}

export default App
