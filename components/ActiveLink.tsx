import Link from 'next/link'
import style from './ActiveLink.module.css'
import { useRouter } from 'next/router'
import { FC } from 'react'
interface Props {
  href: string
  text: string
}
const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter()
  const className = asPath === href ? style.activeLink : ''
  return (
    <Link href={href} legacyBehavior>
      <a className={className}>{text}</a>
    </Link>
  )
}

export default ActiveLink
