import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import { routes } from './config/routes'
import AuthProvider from './context/AuthProvider'
import Private from './components/private/Private'
import DynamicComponent from './components/dynamic-component/DynamicComponent'

const App: FC = () => {
	return (
		<AuthProvider>
			<Layout>
				<Routes>
					<Route
						path={routes.home}
						element={<DynamicComponent name='HomePage' />}
					/>
					<Route
						path={routes.characters}
						element={<DynamicComponent name='CharactersPage' />}
					/>
					<Route
						path={routes.character}
						element={
							<Private>
								<DynamicComponent name='OneCharacterPage' />
							</Private>
						}
					/>
					<Route
						path={routes.episodes}
						element={
							<Private>
								<DynamicComponent name='EpisodesPage' />
								{/* <EpisodesPage /> */}
							</Private>
						}
					/>
					<Route
						path={routes.locations}
						element={
							<Private>
								<DynamicComponent name='LocationsPage' />
								{/* <LocationsPage /> */}
							</Private>
						}
					/>
					<Route
						path={routes.login}
						element={<DynamicComponent name='LoginPage' />}
					/>
					<Route
						path={routes.notFound}
						element={<DynamicComponent name='NotFoundPage' />}
					/>
				</Routes>
			</Layout>
		</AuthProvider>
	)
}

export default App
