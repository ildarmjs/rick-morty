import { FC } from 'react'
import { useParams } from 'react-router-dom'
import OneCharacter from '../components/one-character/OneCharacter'
const OneCharacterPage: FC = () => {
	const { id } = useParams()
	console.log(id)

	return <OneCharacter charId={id} />
}

export default OneCharacterPage
