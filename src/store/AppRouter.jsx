import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { MainPage } from '../heladitto/pages/MainPage'

export const AppRouter = () => {
  const authStatus = 'not-authenticated'

  return (
    <Routes>
      {authStatus === 'not-authenticated' ? (
        <Route path='/auth/*' element={<AuthRoutes />} />
      ) : (
        <Route path='/*' element={<MainPage />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
