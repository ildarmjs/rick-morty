import { FC } from 'react'
import Title from '../ui/title/Title'
import LocationCard from './location-card/LocationCard'
import { useInfinityScroll } from '../../hooks/useInfinityScroll'
import { ILocations } from '../../interfaces/locations'
import ErrorBoundary from '../error-boundary/ErrorBoundary'

const Locations: FC = () => {
	const { items, loading, lastItemRef } = useInfinityScroll('location')
	const renderLocations = () => {
		return items.map((location: ILocations, index: number) => {
			if (items.length === index + 1) {
				return (
					<LocationCard
						location={location}
						key={location.id}
						ref={lastItemRef}
					/>
				)
			} else {
				return <LocationCard location={location} key={location.id} />
			}
		})
	}
	return (
		<ErrorBoundary>
			<div className='mt-[80px] max-w-[1300px] mx-auto'>
				<Title title='Локации' />
				<div className='grid grid-cols-4 gap-4 mb-4'>
					{renderLocations()}
					{loading && <div>Загрузка...</div>}
				</div>
			</div>
		</ErrorBoundary>
	)
}

export default Locations
