import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoHeladitto from '../../assets/LOGO HELADITTO.png'
import { useForm } from '../../hooks/useForm'

const formData = {
  name: '',
  lastName: '',
  email: '',
  password: ''
}

const formValidations = {
  email: [value => value.includes('@'), 'El correo debe tener una @.'],
  password: [
    value => value.length >= 8,
    'La contraseña debe tener más de 8 caracteres.'
  ],
  name: [
    value => value.length >= 3,
    'El nombre debe tener más de 3 caracteres.'
  ],
  lastName: [
    value => value.length >= 3,
    'El apellido debe tener más de 3 caracteres.'
  ]
}

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    onInputChange,
    name,
    formState,
    lastName,
    email,
    password,
    nameValid,
    lastNameValid,
    emailValid,
    passwordValid,
    isFormValid
  } = useForm(formData, formValidations)

  const onSubmit = event => {
    event.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return
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
                <label htmlFor='name'>Nombre</label>
                <input
                  type='text'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='name'
                  placeholder='Tu nombre'
                  name='name'
                  value={name}
                  onChange={onInputChange}
                />
                {nameValid && formSubmitted ? (
                  <p className='text-red-500 text-xs italic'>{nameValid}</p>
                ) : (
                  ''
                )}
              </div>

              <div className='mb-6'>
                <label htmlFor='lastName'>Apellido</label>
                <input
                  type='text'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='lastName'
                  placeholder='Tu apellido'
                  name='lastName'
                  value={lastName}
                  onChange={onInputChange}
                />
                {lastNameValid && formSubmitted ? (
                  <p className='text-red-500 text-xs italic'>{lastNameValid}</p>
                ) : (
                  ''
                )}
              </div>
              <div className='mb-6'>
                <label htmlFor='email'>Correo</label>
                <input
                  type='email'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='email'
                  placeholder='Tu correo electronico'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                />
                {emailValid && formSubmitted ? (
                  <p className='text-red-500 text-xs italic'>{emailValid}</p>
                ) : (
                  ''
                )}
              </div>
              <div className='mb-6'>
                <label htmlFor='password'>Contraseña</label>
                <input
                  type='password'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='password'
                  placeholder='Tu contraseña'
                  name='password'
                  value={password}
                  onChange={onInputChange}
                />
                {passwordValid && formSubmitted ? (
                  <p className='text-red-500 text-xs italic'>{passwordValid}</p>
                ) : (
                  ''
                )}
              </div>

              <div className='text-center lg:text-left'>
                <button
                  type='submit'
                  className='inline-block px-7 py-3 mb-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Registrar
                </button>

                <div className='flex justify-center items-center lg:justify-start'>
                  <p className=''>¿Ya tienes cuenta?&nbsp;</p>
                  <Link
                    to='/auth/login'
                    className='text-sm font-semibold text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'
                  >
                    Ingresa
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
