import type { PropsWithChildren } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ROUTES } from './routes'
import { useAuth } from '../context/AuthProvider'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
	const { user, signOut } = useAuth()
	const navigate = useNavigate()

	const handleSignOut = () => {
		signOut(() => {
			navigate('/login', { replace: true })
		})
	}
	return (
		<div className=''>
			<nav className='h-[50px] flex items-center justify-end shadow-[0px_6px_5px_0px_rgba(31,31,32,0.38)] px-[40px]'>
				<ul className='flex  gap-[30px] text-[20px]'>
					{ROUTES.map(item => (
						<li key={item.id}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									isActive ? 'text-green-600' : 'text-white'
								}
							>
								{item.name}
							</NavLink>
						</li>
					))}
					{user ? (
						<button onClick={handleSignOut}>Выйти</button>
					) : (
						<button onClick={() => navigate('/login')}>Войти</button>
					)}
				</ul>
			</nav>
			<div>{children}</div>
		</div>
	)
}

export default Layout
