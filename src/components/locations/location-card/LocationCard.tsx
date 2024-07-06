import { FC } from 'react'
import { ILocations } from '../../../interfaces/locations'

interface ILocationCardProps {
	location: ILocations
}

const LocationCard: FC<ILocationCardProps> = ({ location }) => {
	return (
		<div className='p-4 bg-zinc-700 shadow-inner rounded-lg'>
			<div className='text-[18px] font-semibold'>Название: {location.name}</div>
			<div>
				<span className='font-semibold'>Измерение:</span> {location.dimension}
			</div>
			<div>
				<span className='font-semibold'>Тип:</span> {location.type}
			</div>
		</div>
	)
}

export default LocationCard
