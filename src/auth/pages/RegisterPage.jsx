import { Link } from 'react-router-dom'
import logoHeladitto from '../../assets/LOGO HELADITTO.png'

export const RegisterPage = () => {
  return (
    <section className='h-screen'>
      <div className='px-6 h-full text-gray-800 py-8'>
        <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6'>
          <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-1/3 lg:w-1/2 md:w-1/2 w-2/3 mb-12 md:mb-0'>
            <img src={logoHeladitto} className='w-full' alt='Sample image' />
          </div>
          <div className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0'>
            <form>
              <div className='mb-6'>
                <label htmlFor=''>Nombre</label>
                <input
                  type='text'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleFormControlInput2'
                  placeholder='Tu nombre'
                />
              </div>

              <div className='mb-6'>
                <label htmlFor=''>Apellido</label>
                <input
                  type='text'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleFormControlInput2'
                  placeholder='Tu apellido'
                />
              </div>
              <div className='mb-6'>
                <label htmlFor=''>Correo</label>
                <input
                  type='email'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleFormControlInput2'
                  placeholder='Correo electronico'
                />
              </div>
              <div className='mb-6'>
                <label htmlFor=''>Contraseña</label>
                <input
                  type='text'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleFormControlInput2'
                  placeholder='Contraseña'
                />
              </div>

              <div className='text-center lg:text-left'>
                <button
                  type='button'
                  className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Registrar
                </button>
                <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                  ¿Ya tienes cuenta?
                  <Link to='/auth/login'>
                    <a
                      href='#!'
                      className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'
                    >
                      {' '}
                      Ingresa
                    </a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
