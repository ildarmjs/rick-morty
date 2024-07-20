import { forwardRef } from 'react'
import { IEpisodes } from '../../../interfaces/episodes'

interface IEpisodeCardProps {
	episode: IEpisodes
}

const EpisodeCard = forwardRef<HTMLDivElement, IEpisodeCardProps>(
	({ episode }, ref) => {
		if (episode.id === 3) {
			throw new Error('Искусственная ошибка в EpisodeCard')
		}
		return (
			<div ref={ref} className='p-4 bg-zinc-700 shadow-inner rounded-lg'>
				<div className='text-[18px] font-semibold'>{episode.name}</div>
				<div>
					<span className='font-semibold'>Дата выхода:</span> {episode.air_date}
				</div>
				<div>
					<span className='font-semibold'>Эпизод:</span> {episode.episode}
				</div>
			</div>
		)
	}
)

export default EpisodeCard
