import { forwardRef } from 'react'
import { ICharacters } from '../../../../interfaces/characters'
import { Link } from 'react-router-dom'

interface ICharactersCardProps {
	character: ICharacters
}

const CharactersCard = forwardRef<HTMLAnchorElement, ICharactersCardProps>(
	({ character }, ref) => {
		if (character.id === 1 || character.id === 4) {
			throw new Error('Искусственная ошибка в EpisodeCard')
		}
		return (
			<Link
				ref={ref}
				to={`/characters/${character.id}`}
				className='p-4 bg-zinc-700 shadow-inner rounded-lg'
			>
				<img src={character.image} alt={character.name} className='mb-[10px]' />
				<div className='text-[18px] font-semibold'>{character.name}</div>
				<div>{character.species}</div>
			</Link>
		)
	}
)

export default CharactersCard
