import { FC } from 'react'
import { IEpisodes } from '../../interfaces/episodes'
import Title from '../ui/title/Title'
import EpisodeCard from './episode-card/EpisodeCard'
import ErrorBoundary from '../error-boundary/ErrorBoundary'
import { useInfinityScroll } from '../../hooks/useInfinityScroll'
const Episodes: FC = () => {
	const { items, loading, lastItemRef } = useInfinityScroll('episode')
	const renderEpisodes = () => {
		return items.map((episode: IEpisodes, index: number) => {
			if (items.length === index + 1) {
				return (
					<ErrorBoundary>
						<EpisodeCard episode={episode} key={episode.id} ref={lastItemRef} />
					</ErrorBoundary>
				)
			} else {
				return (
					<ErrorBoundary>
						<EpisodeCard episode={episode} key={episode.id} />
					</ErrorBoundary>
				)
			}
		})
	}
	return (
		<ErrorBoundary>
			<div className='mt-[80px] max-w-[1300px] mx-auto'>
				<Title title='Эпизоды' />
				<div className='grid grid-cols-4 gap-4 mb-4'>
					{renderEpisodes()}
					{loading && <div>Загрузка...</div>}
				</div>
			</div>
		</ErrorBoundary>
	)
}

export default Episodes
