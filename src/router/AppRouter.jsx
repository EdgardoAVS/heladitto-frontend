import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

import { MainRoutes } from '../heladitto/routes/MainRoutes'

export const AppRouter = () => {
  const authStatus = 'notauthenticated'

  return (
    <Routes>
      {authStatus === 'not-authenticated' ? (
        <>
          <Route path='/auth/*' element={<AuthRoutes />} />
          <Route path='/*' element={<Navigate to='/auth/login' />} />
        </>
      ) : (
        <>
          <Route path='/main/*' element={<MainRoutes />} />
          <Route path='/*' element={<Navigate to='/main/dashboard' />} />
        </>
      )}
    </Routes>
  )
}
