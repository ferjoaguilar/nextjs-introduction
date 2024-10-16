import { Metadata } from "next"
import Link from "next/link"


export const metadata:Metadata = {
    title: 'Mi pagina de about',
    description: 'Cualquier cosa'
}

const About = () => {
  return (
    <>
        <h1>About page</h1>
        <Link href={'/'}>Go to home</Link>
    </>

  )
}

export default About