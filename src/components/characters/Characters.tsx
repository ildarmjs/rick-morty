import { FC } from 'react'
import CharactersGrid from './characters-grid/CharactersGrid'

import Title from '../ui/title/Title'
import ErrorBoundary from '../error-boundary/ErrorBoundary'
import { useInfinityScroll } from '../../hooks/useInfinityScroll'
const Characters: FC = () => {
	const { items, loading, lastItemRef } = useInfinityScroll('character')
	return (
		<ErrorBoundary>
			<div className='mt-[80px] max-w-[1300px] mx-auto'>
				<Title title='Герои' />
				<CharactersGrid
					characters={items}
					loading={loading}
					lastItemRef={lastItemRef}
				/>
			</div>
		</ErrorBoundary>
	)
}

export default Characters
