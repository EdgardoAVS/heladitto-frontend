import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const HeladittoApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
