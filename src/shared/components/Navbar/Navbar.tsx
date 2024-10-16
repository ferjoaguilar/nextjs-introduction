import Link from 'next/link'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <h3>Kodigo-App</h3>
        </div>
        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/counter'}>Counter</Link>
            <Link href={'/images'}>Images</Link>
            <Link href={'/create-comment'}>Create Comment</Link>
        </div>
    </nav>
  )
}
