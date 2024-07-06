import { FC } from 'react'
import { useCustomState } from '../../hooks/useCustomState'
import dbLocations from '../../data/location.json'
import Title from '../ui/title/Title'
import { ILocations } from '../../interfaces/locations'
import ShowMoreButton from '../ui/show-more-button/ShowMoreButton'
import LocationCard from './location-card/LocationCard'
const Locations: FC = () => {
	const [state, visibleState, visibleCount, loading, handleShowMore] =
		useCustomState(dbLocations)
	console.log(state)

	return (
		<div className='mt-[80px] max-w-[1300px] mx-auto'>
			<Title title='Локации' />
			<div className='grid grid-cols-4 gap-4 mb-4'>
				{visibleState.map((location: ILocations) => (
					<LocationCard location={location} key={location.id} />
				))}
			</div>
			{visibleCount < state.length && (
				<ShowMoreButton onClick={handleShowMore} loading={loading} />
			)}
		</div>
	)
}

export default Locations
