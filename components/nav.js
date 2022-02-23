import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/Link';
import styles from './nav.module.css';
const Nav = () => {
  return (
    <nav >
        <Link href="/">
        <a className='me-3'>Home</a>
        </Link>
        <Link href="/about">
        <a className={styles.link}>About</a>
        </Link>
    </nav>
  )
}

export default Nav