import { Link } from 'react-router-dom'
import logoHeladitto from '../../assets/LOGO HELADITTO.png'
import { useForm } from '../../hooks/useForm'

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const { email, password, onInputChange } = useForm(formData)

  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <section className='h-screen'>
      <div className='px-6 h-full text-gray-800 py-8'>
        <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6'>
          <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-1/3 lg:w-1/2 md:w-1/2 w-2/3 mb-12 md:mb-0'>
            <img src={logoHeladitto} className='w-full' alt='Sample image' />
          </div>
          <div className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0'>
            <form onSubmit={onSubmit}>
              <div className='mb-6'>
                <input
                  type='email'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='email'
                  placeholder='Correo electrónico'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                />
              </div>

              <div className='mb-6'>
                <input
                  type='password'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='password'
                  placeholder='Contraseña'
                  name='password'
                  value={password}
                  onChange={onInputChange}
                />
              </div>

              <div className='text-center lg:text-left'>
                <button
                  type='submit'
                  className='inline-block px-7 py-3 mb-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Ingresar
                </button>
                <div className='flex justify-center items-center lg:justify-start'>
                  <p>¿No tienes cuenta?&nbsp; </p>

                  <Link
                    to='/auth/register'
                    className='text-sm font-semibold text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'
                  >
                    Registrar
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
