import { forwardRef } from 'react'
import { Card, Typography } from 'antd'
import { IEpisodes } from '../../../interfaces/episodes'

const { Text } = Typography

interface IEpisodeCardProps {
	episode: IEpisodes
}

const EpisodeCard = forwardRef<HTMLDivElement, IEpisodeCardProps>(
	({ episode }, ref) => {
		if (episode.id === 3) {
			throw new Error('Искусственная ошибка в EpisodeCard')
		}

		return (
			<div ref={ref}>
				<Card
					title={episode.name}
					style={{ backgroundColor: '#404040', color: 'white' }}
					headStyle={{ color: 'white' }}
				>
					<Text strong>Дата выхода:</Text> <Text>{episode.air_date}</Text>
					<br />
					<Text strong>Эпизод:</Text> <Text>{episode.episode}</Text>
				</Card>
			</div>
		)
	}
)

export default EpisodeCard
