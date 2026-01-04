import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const isLogged = localStorage.getItem('isLogged') === 'true'

  return isLogged ? children : <Navigate to="/login" replace />
}

export default PrivateRoute