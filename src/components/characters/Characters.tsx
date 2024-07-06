import { FC } from 'react'
import dbCharacters from '../../data/characters.json'
import CharactersGrid from './characters-grid/CharactersGrid'
import { useCustomState } from '../../hooks/useCustomState'
import ShowMoreButton from '../ui/show-more-button/ShowMoreButton'
import Title from '../ui/title/Title'
const Characters: FC = () => {
	const [state, visibleState, visibleCount, loading, handleShowMore] =
		useCustomState(dbCharacters)
	return (
		<div className='mt-[80px] max-w-[1300px] mx-auto'>
			<Title title='Герои' />
			<CharactersGrid characters={visibleState} />
			{visibleCount < state.length && (
				<ShowMoreButton onClick={handleShowMore} loading={loading} />
			)}
		</div>
	)
}

export default Characters
