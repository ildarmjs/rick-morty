import { FC } from 'react'
import { Form, Input, Button, Card, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuth } from '../../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const Login: FC = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from || '/'

	const { signIn } = useAuth()

	const onFinish = (values: { user: string; password: string }) => {
		if (!values.user || !values.password) {
			message.error('Пожалуйста, заполните все поля')
			return
		}
		signIn(values.user, () => {
			navigate(from, { replace: true })
		})
	}

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<Card title='Вход в систему' style={{ width: 300 }}>
				<Form
					name='login'
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name='user'
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите имя пользователя!'
							}
						]}
					>
						<Input prefix={<UserOutlined />} placeholder='Имя пользователя' />
					</Form.Item>
					<Form.Item
						name='password'
						rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
					>
						<Input.Password prefix={<LockOutlined />} placeholder='Пароль' />
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit' style={{ width: '100%' }}>
							Войти
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default Login
