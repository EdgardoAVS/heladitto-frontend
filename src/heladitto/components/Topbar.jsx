import heladitto from '../../assets/heladitto.png'

export const Topbar = () => {
  return (
    <menu className='flex justify-between items-center px-6 py-1 bg-[#0A2647]'>
      <img src={heladitto} alt='Logo heladitto' width={70} height={70} />

      <div className='flex items-center gap-2 text-white'>
        <span>Edgardo Vargas</span>
        <div className='w-10 rounded-full'>
          <img
            className='w-14 h-10 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
            alt=''
          />
        </div>
      </div>
    </menu>
  )
}
