import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './store/AppRouter'

export const HeladittoApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
