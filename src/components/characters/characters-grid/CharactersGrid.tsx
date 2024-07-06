import { FC } from 'react'
import { ICharacters } from '../../../interfaces/characters'
import CharactersCard from './characters-card/CharactersCard'

interface ICharactersGridProps {
	characters: ICharacters[]
}

const CharactersGrid: FC<ICharactersGridProps> = ({ characters }) => {
	return (
		<div className='grid grid-cols-4 gap-4 mb-4'>
			{characters.map(character => (
				<CharactersCard character={character} key={character.id} />
			))}
		</div>
	)
}

export default CharactersGrid
