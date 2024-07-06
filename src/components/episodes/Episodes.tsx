import { FC } from 'react'
import { useCustomState } from '../../hooks/useCustomState'
import dbEpisodes from '../../data/episode.json'
import ShowMoreButton from '../ui/show-more-button/ShowMoreButton'
import { IEpisodes } from '../../interfaces/episodes'
import Title from '../ui/title/Title'
import EpisodeCard from './episode-card/EpisodeCard'
const Episodes: FC = () => {
	const [state, visibleState, visibleCount, loading, handleShowMore] =
		useCustomState(dbEpisodes)

	return (
		<div className='mt-[80px] max-w-[1300px] mx-auto'>
			<Title title='Эпизоды' />
			<div className='grid grid-cols-4 gap-4 mb-4'>
				{visibleState.map((episode: IEpisodes) => (
					<EpisodeCard episode={episode} key={episode.id} />
				))}
			</div>
			{visibleCount < state.length && (
				<ShowMoreButton onClick={handleShowMore} loading={loading} />
			)}
		</div>
	)
}

export default Episodes
