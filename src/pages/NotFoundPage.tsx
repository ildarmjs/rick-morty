import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: FC = () => {
	const navigate = useNavigate()

	return (
		<div className='flex justify-center items-center h-[100vh] '>
			<div>
				<h1 className='text-[60px] font-bold mb-[30px]'>
					404 | Страница не найдена
				</h1>
				<button
					className='border px-7 py-2 rounded-md hover:bg-gray-300 hover:text-black'
					onClick={() => navigate('/')}
				>
					Вернуться на главную
				</button>
			</div>
		</div>
	)
}

export default NotFoundPage
