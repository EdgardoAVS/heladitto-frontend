import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Dashboard } from '../pages/Dashboard'
import { SalesPage } from '../pages/SalesPage'
import { SellPage } from '../pages/SellPage'
// import { MainPage } from '../pages/MainPage'
export const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='main' element={<MainPage />} /> */}
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='vender' element={<SellPage />} />
        <Route path='orders' element={<SalesPage />} />
        <Route path='/*' element={<Navigate to='/main/dashboard' />} />
      </Routes>
    </>
  )
}
