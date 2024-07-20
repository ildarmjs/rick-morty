import { FC } from 'react'
import { ICharacters } from '../../../interfaces/characters'
import CharactersCard from './characters-card/CharactersCard'
import ErrorBoundary from '../../error-boundary/ErrorBoundary'

interface ICharactersGridProps {
	characters: ICharacters[]
	loading: boolean
	lastItemRef: any
}

const CharactersGrid: FC<ICharactersGridProps> = ({
	characters,
	lastItemRef,
	loading
}) => {
	const renderCharacters = () => {
		return characters.map((character: ICharacters, index: number) => {
			if (characters.length === index + 1) {
				return (
					<ErrorBoundary>
						<CharactersCard
							character={character}
							key={character.id}
							ref={lastItemRef}
						/>
					</ErrorBoundary>
				)
			} else {
				return (
					<ErrorBoundary>
						<CharactersCard character={character} key={character.id} />
					</ErrorBoundary>
				)
			}
		})
	}
	return (
		<>
			<div className='grid grid-cols-4 gap-4 mb-4'>{renderCharacters()}</div>
			{loading && <div>Загрузка...</div>}
		</>
	)
}

export default CharactersGrid
