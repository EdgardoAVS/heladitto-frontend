import { Navbar } from './Navbar'
import { Topbar } from './Topbar'

export const Header = () => {
  return (
    <>
      <header className='flex flex-col'>
        <Topbar />
        <Navbar />
      </header>
    </>
  )
}
