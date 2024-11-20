import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import MainHeaderBg from './main-header-bg'
import NavLink from './nav-link'

export default function MainHeader() {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image src={logoImg} alt='NextLevel Food' priority />
          Im Hungry
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
