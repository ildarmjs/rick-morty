import { FC } from 'react'
import { Col, Row, Typography, Spin } from 'antd'
import { IEpisodes } from '../../interfaces/episodes'
import ErrorBoundary from '../error-boundary/ErrorBoundary'
import { useInfinityScroll } from '../../hooks/useInfinityScroll'
import EpisodeCard from './episode-card/EpisodeCard'

const { Title } = Typography

const Episodes: FC = () => {
	const { items, loading, lastItemRef } = useInfinityScroll('episode')

	const renderEpisodes = () => {
		return items.map((episode: IEpisodes, index: number) => (
			<Col xs={24} sm={12} md={8} lg={6} key={episode.id}>
				<ErrorBoundary>
					<EpisodeCard
						episode={episode}
						ref={items.length === index + 1 ? lastItemRef : null}
					/>
				</ErrorBoundary>
			</Col>
		))
	}

	return (
		<ErrorBoundary>
			<div style={{ maxWidth: 1300, margin: '80px auto' }}>
				<Title level={2}>Эпизоды</Title>
				<Row gutter={[16, 16]}>{renderEpisodes()}</Row>
				{loading && (
					<div style={{ textAlign: 'center', marginTop: 20 }}>
						<Spin size='large' />
					</div>
				)}
			</div>
		</ErrorBoundary>
	)
}

export default Episodes
