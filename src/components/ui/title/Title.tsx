import { FC } from 'react'

interface ITitleProps {
	title: string
}

const Title: FC<ITitleProps> = ({ title }) => {
	return (
		<h1 className='text-center text-[45px] font-bold mb-[80px]'>{title}</h1>
	)
}

export default Title
