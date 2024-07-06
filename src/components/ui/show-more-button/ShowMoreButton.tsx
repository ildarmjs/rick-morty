import { FC } from 'react'

interface IShowMoreButtonProps {
	onClick: () => void
	loading: boolean
}

const ShowMoreButton: FC<IShowMoreButtonProps> = ({ onClick, loading }) => {
	return (
		<div className='flex justify-center mt-8 mb-8'>
			{loading ? (
				<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
			) : (
				<button
					className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
					onClick={onClick}
				>
					Показать больше
				</button>
			)}
		</div>
	)
}

export default ShowMoreButton
