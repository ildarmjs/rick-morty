import { FC } from 'react'
import { useAuth } from '../../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

interface IPrivateProps {
	children: React.ReactNode
}

const Private: FC<IPrivateProps> = ({ children }) => {
	const { user } = useAuth()
	const location = useLocation()

	if (user === null) {
		return (
			<Navigate to={'/login'} state={{ from: location.pathname }} replace />
		)
	}
	return children
}

export default Private
