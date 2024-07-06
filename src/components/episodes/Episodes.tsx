import { FC } from 'react'
import { useCustomState } from '../../hooks/useCustomState'
import dbEpisodes from '../../data/episode.json'
import ShowMoreButton from '../ui/show-more-button/ShowMoreButton'
import { IEpisodes } from '../../interfaces/episodes'
import Title from '../ui/title/Title'
const Episodes: FC = () => {
	const [state, visibleState, visibleCount, loading, handleShowMore] =
		useCustomState(dbEpisodes)

	return (
		<div className='mt-[80px] max-w-[1300px] mx-auto'>
			<Title title='Эпизоды' />
			<div className='grid grid-cols-4 gap-4 mb-4'>
				{visibleState.map((episode: IEpisodes) => (
					<div className='p-4 bg-zinc-700 shadow-inner rounded-lg'>
						<div className='text-[18px] font-semibold'>{episode.name}</div>
						<div>
							<span className='font-semibold'>Дата выхода:</span>{' '}
							{episode.air_date}
						</div>
						<div>
							<span className='font-semibold'>Эпизод:</span> {episode.episode}
						</div>
					</div>
				))}
			</div>
			{visibleCount < state.length && (
				<ShowMoreButton onClick={handleShowMore} loading={loading} />
			)}
		</div>
	)
}

export default Episodes
