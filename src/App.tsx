import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import EpisodesPage from './pages/EpisodesPage'
import LocationsPage from './pages/LocationsPage'
import NotFoundPage from './pages/NotFoundPage'
import OneCharacterPage from './pages/OneCharacterPage'

const App: FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/characters' element={<CharactersPage />} />
				<Route path='/characters/:id' element={<OneCharacterPage />} />
				<Route path='/episodes' element={<EpisodesPage />} />
				<Route path='/locations' element={<LocationsPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Layout>
	)
}

export default App
