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
import AuthProvider from './context/AuthProvider'
import LoginPage from './pages/LoginPage'
import Private from './components/private/Private'

const App: FC = () => {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route path={routes.home} element={<HomePage />} />
					<Route path={routes.characters} element={<CharactersPage />} />
					<Route
						path={routes.character}
						element={
							<Private>
								<OneCharacterPage />
							</Private>
						}
					/>
					<Route
						path={routes.episodes}
						element={
							<Private>
								<EpisodesPage />
							</Private>
						}
					/>
					<Route
						path={routes.locations}
						element={
							<Private>
								<LocationsPage />
							</Private>
						}
					/>
					<Route path={routes.login} element={<LoginPage />} />
					<Route path={routes.notFound} element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</AuthProvider>
	)
}

export default App
