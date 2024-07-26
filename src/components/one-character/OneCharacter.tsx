import { FC, useState } from 'react'
import dbCharacters from '../../data/characters.json'
interface IOneCharacterProps {
	charId: string | undefined
}

const OneCharacter: FC<IOneCharacterProps> = ({ charId }) => {
	const foundCharacter = dbCharacters.find(char => char.id === Number(charId))
	const [character] = useState(foundCharacter)
	console.log(character)

	return (
		<div className='mt-[80px] max-w-[1300px] mx-auto'>
			<div className='flex gap-[100px]'>
				<img src={character?.image} alt={character?.name} />
				<div>
					<h4 className='font-bold text-[45px]'>{character?.name}</h4>
					<h4 className='font-semibold text-[25px]'>{character?.species}</h4>
					<h4 className='font-semibold text-[25px]'>{character?.gender}</h4>
					<h4 className='font-semibold text-[25px]'>{character?.status}</h4>
				</div>
			</div>
		</div>
	)
}

export default OneCharacter
