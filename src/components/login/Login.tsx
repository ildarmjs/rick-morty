import { FC, FormEvent } from 'react'
import { useAuth } from '../../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const Login: FC = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from || '/'

	const { signIn } = useAuth()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const user = formData.get('user') as any
		const password = formData.get('password')
		if (!user || !password) {
			alert('Пожалуйста, заполните все поля')
			return
		}
		signIn(user, () => {
			navigate(from, {
				replace: true
			})
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='text-black'
				type='text'
				name='user'
				placeholder='Введите имя'
			/>
			<input
				className='text-black'
				type='password'
				name='password'
				placeholder='Введите пароль'
			/>
			<button type='submit'>Войти</button>
		</form>
	)
}

export default Login
