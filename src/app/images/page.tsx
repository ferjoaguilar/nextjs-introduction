import Image from 'next/image'

const Images = () => {
  return (
    <>
        <h1>Cargando imagenes con NextJS</h1>
        <Image 
            src={'https://res.cloudinary.com/dgdn7rgoj/image/upload/v1721169299/TareaKodigoS2/jgiwmhwbhth5yhrzzxsm.jpg'}
            alt='Imagen'
            width={100}
            height={100}
            priority
        />
    </>
  )
}

export default Images 