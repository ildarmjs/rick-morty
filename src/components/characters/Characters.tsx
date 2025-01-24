import { FC } from 'react'
import { Typography, Layout } from 'antd'
import CharactersGrid from './characters-grid/CharactersGrid'
import ErrorBoundary from '../error-boundary/ErrorBoundary'
import { useInfinityScroll } from '../../hooks/useInfinityScroll'

const { Title } = Typography
const { Content } = Layout

const Characters: FC = () => {
	const { items, loading, lastItemRef } = useInfinityScroll('character')

	return (
		<ErrorBoundary>
			<Layout>
				<Content
					style={{ maxWidth: 1300, margin: '80px auto', padding: '0 16px' }}
				>
					<Title level={2}>Герои</Title>
					<CharactersGrid
						characters={items}
						loading={loading}
						lastItemRef={lastItemRef}
					/>
				</Content>
			</Layout>
		</ErrorBoundary>
	)
}

export default Characters
