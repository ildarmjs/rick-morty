import { forwardRef } from 'react'
import { Card, Typography } from 'antd'
import { ILocations } from '../../../interfaces/locations'

const { Text } = Typography

interface ILocationCardProps {
	location: ILocations
}

const LocationCard = forwardRef<HTMLDivElement, ILocationCardProps>(
	({ location }, ref) => {
		return (
			<div ref={ref}>
				<Card
					title={<Text strong>Название: {location.name}</Text>}
					style={{ backgroundColor: '#404040', color: 'white' }}
					headStyle={{
						color: 'white',
						borderBottom: '1px solid rgba(255,255,255,0.1)'
					}}
					bodyStyle={{ padding: '12px 24px' }}
				>
					<p>
						<Text strong>Измерение:</Text> <Text>{location.dimension}</Text>
					</p>
					<p>
						<Text strong>Тип:</Text> <Text>{location.type}</Text>
					</p>
				</Card>
			</div>
		)
	}
)

export default LocationCard
