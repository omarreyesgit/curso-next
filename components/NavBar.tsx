import React from 'react'
import style from './NavBar.module.css'
import ActiveLink from './ActiveLink'
const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
]
const NavBar = () => {
  return (
    <nav className={style.menuContainer}>
      {menuItems.map(({ href, text }) => {
        return <ActiveLink key={href} href={href} text={text} />
      })}
    </nav>
  )
}

export default NavBar
